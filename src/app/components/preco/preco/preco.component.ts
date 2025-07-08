import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.scss']
})
export class PrecoComponent implements OnInit, OnDestroy {

    @ViewChild('videoRef') videoElement!: ElementRef;
    isLoading: boolean = true;
    currentSlide = 0;
    intervalId: any;
    isTransitioning = true;

   colunas = [
  {
    imageSrc: 'assets/consolidacao-de-cargas.jpg',
    title: 'Rodoaéreo',
    description: 'A confiança do rodoviário com o ritmo do aéreo — agilidade de ponta a ponta para entregas que não podem esperar.',
    buttonText: '🟢 Clique e fale com a DGA.',
    buttonEmail: '📬 E-mail direto, sem rodeios.'
  },
  {
    imageSrc: 'assets/manuseio-armazen.jpg',
    title: 'Manuseio e Armazenagem',
    description: 'Estrutura completa para recebimento, conferência e armazenagem temporária, reduzindo necessidade de espaço próprio.',
    buttonText: '📲 Frete rápido? É só clicar.',
    buttonEmail: '🛡️ Planeje com nosso e-mail.'
  },
  {
    imageSrc: 'assets/planejamento-logistico.jpeg',
    title: 'Planejamento Logístico Inteligente',
    description: 'Roteirização eficiente para menor custo por entrega.',
    buttonText: '🖐️ Aqui tem atendimento humano.',
    buttonEmail: '🖥️ E-mail? A gente responde já.'
  },
   {
    imageSrc: 'assets/truck-montain.jpg',
    title: 'Carro Dedicado',
    description: 'Exclusividade total para sua carga, sem paradas, garantindo os menores prazos de entrega.',
    buttonText: '📦 Frete exclusivo? Chama no Whats!',
    buttonEmail: '📬 Fale direto por e-mail.'
  },
];





  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // troca a cada 5 segundos


        setTimeout(() => {
      this.isLoading = false;

      const video = this.videoElement.nativeElement;
      video.muted = true;
      video.load();
      video.play().catch((err: any) => {
        console.warn('Erro ao tentar rodar vídeo (com delay):', err);
      });
    }, 3000);
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    if (!this.isTransitioning) return; // evita chamadas duplicadas

    if (this.currentSlide === this.colunas.length - 1) {
      // última imagem, vamos desativar transição para voltar rápido
      this.isTransitioning = false;  // desliga animação CSS
      this.currentSlide = 0;
      // depois de um tempo mínimo, reativa a transição para próximas trocas
      setTimeout(() => {
        this.isTransitioning = true;
      }, 50);
    } else {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (!this.isTransitioning) return;

    if (this.currentSlide === 0) {
      this.isTransitioning = false;
      this.currentSlide = this.colunas.length - 1;
      setTimeout(() => {
        this.isTransitioning = true;
      }, 50);
    } else {
      this.currentSlide--;
    }
  }

    ngAfterViewInit(): void {
    const video = this.videoElement.nativeElement;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        // Quando o vídeo aparecer na tela
        video.muted = true;
        video.load(); // Garante que ele recarrega e começa do início
        video.play().catch((err: any) => {
          console.warn('Erro ao tentar rodar vídeo visível:', err);
        });

        observer.disconnect(); // Para de observar depois de tocar
      }
    }, {
      threshold: 0.5 // Quando pelo menos 50% do vídeo estiver visível
    });

    observer.observe(video);
  }
  goToSlide(index: number) {
  this.currentSlide = index;
}
}



















































