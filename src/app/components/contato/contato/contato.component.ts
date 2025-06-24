import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

  formData = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  mostrarModal = false;
  mensagemModal = '';
  tipoModal: 'sucesso' | 'erro' = 'sucesso';

  constructor(private http: HttpClient) {}

enviarFormulario() {
  if (this.formData.nome && this.formData.email && this.formData.mensagem) {
    const dados = {
      nome: this.formData.nome,
      email: this.formData.email,
      telefone: this.formData.telefone,
      mensagem: this.formData.mensagem
    };

    this.http.post('https://formsubmit.co/ajax/comercial4@dgalogistica.com.br', dados).subscribe({
      next: () => {
        this.mostrarModal = true;
        this.tipoModal = 'sucesso';
        this.mensagemModal = `${this.formData.nome}, sua mensagem foi enviada com sucesso! Em breve entraremos em contato pelo e-mail: ${this.formData.email} ou pelo WhatsApp: ${this.formData.telefone}.`;

      },
      error: () => {
        this.mostrarModal = true;
        this.tipoModal = 'erro';
        this.mensagemModal = 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
      }
    });
  }
}


gerarMensagemSucesso(): string {
  const nome = this.formData.nome || 'Cliente';
  const contato = this.formData.telefone
    ? `pelo WhatsApp no número ${this.formData.telefone}`
    : `pelo e-mail ${this.formData.email}`;

  return `Olá ${nome}, sua mensagem foi enviada com sucesso!
Alguém da nossa equipe entrará em contato com você em até 2 dias úteis ${contato} para dar continuidade ao seu atendimento. Obrigado pelo contato!`;
}

  limparFormulario() {
    this.formData = {
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    };
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  // mascaraNome(event: any): void{

  //    const input = event.target;

  // // Remove números e símbolos, mantendo letras (com acento) e espaços
  // let valor = input.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');

  // // Remove espaços duplicados
  // valor = valor.replace(/\s{2,}/g, ' ');

  // // Deixa a primeira letra de cada palavra maiúscula
  // valor = valor.replace(/\b\w/g, letra => letra.toUpperCase());

  // // Atualiza input e model
  // input.value = valor;
  // this.formData.nome = valor;

  // }

//   mascaraTelefone(event: any): void {
//   const input = event.target;
//   let digits = input.value.replace(/\D/g, ''); // Remove tudo que não for número

//   // Limita a 11 dígitos (2 DDD + 9 celular ou 8 fixo)
//   digits = digits.substring(0, 11);

//   let formatted = '';

//   if (digits.length <= 10) {
//     // Fixo: (99) 9999-9999
//     formatted = digits.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, (_, ddd, p1, p2) => {
//       return `${ddd ? `(${ddd}` : ''}${ddd && p1 ? `) ${p1}` : ''}${p2 ? `-${p2}` : ''}`;
//     });
//   } else {
//     // Celular: (99) 99999-9999
//     formatted = digits.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, (_, ddd, p1, p2) => {
//       return `${ddd ? `(${ddd}` : ''}${ddd && p1 ? `) ${p1}` : ''}${p2 ? `-${p2}` : ''}`;
//     });
//   }

//   input.value = formatted;
//   this.formData.telefone = formatted;
// }


mascaraMensagem(event: any): void {
  const input = event.target;

  // Remove caracteres especiais indesejados (como emojis ou símbolos de controle)
  let texto = input.value.replace(/[^\x00-\x7FÀ-ÿ\n\r.,!?()'"%$@\- ]/g, '');

  // Remove espaços em excesso
  texto = texto.replace(/\s{2,}/g, ' ');

  // Limita a 5 quebras de linha (opcional)
  const linhas = texto.split('\n');
  if (linhas.length > 5) {
    texto = linhas.slice(0, 5).join('\n');
  }

  input.value = texto;
  this.formData.mensagem = texto;
}

validarTelefone(telefone: string): boolean {
  if (!telefone) return true; // telefone opcional, retorna válido se vazio

  // Remove tudo que não for número
  const digits = telefone.replace(/\D/g, '');

  // Verifica se tem 11 dígitos
  if (digits.length !== 11) return false;

  // Verifica se o número começa com 9 (após DDD)
  if (digits[2] !== '9') return false;

  // Pode adicionar outras validações, mas essa já é básica e eficiente
  return true;
}


}
