import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-prazo',
  templateUrl: './prazo.component.html',
  styleUrls: ['./prazo.component.scss']
})
export class PrazoComponent implements OnInit, OnDestroy {

    @ViewChild('videoRef') videoElement!: ElementRef;
    isLoading: boolean = true;
    currentSlide = 0;
    intervalId: any;
    isTransitioning = true;

   colunas = [
  {
    imageSrc: 'assets/rodoviario-exp.png',
    title: 'Rodoviário Expresso',
    description: 'Entregas mais rápidas no modal rodoviário com prioridade nas coletas e trajetos.',
    buttonText: '⚡ Clicou, falou!',
    buttonEmail: '🖋️ Um e-mail e a gente resolve.'
  },
  {
    imageSrc: 'assets/cargo-plane-airport.jpg',
    title: 'Aéreo',
    description: 'O caminho mais rápido para cargas urgentes, reduzindo drasticamente o tempo de trânsito.',
    buttonText: '🛣️ Sua carga não espera!',
    buttonEmail: '🧾 Transporte com inteligência.'
  },
  {
    imageSrc: 'assets/airplane-sunrise.jpg',
    title: 'Hot Situation',
    description: 'Atendimento emergencial com acionamento imediato para transportes urgentes e prazos reduzidos.',
    buttonText: '🤝 Resolve no Whats!',
    buttonEmail: '💼 Escreve pra DGA.'
  },
  {
    imageSrc: 'assets/low-angle-view-city.jpg',
    title: 'Manuseio e Armazenagem',
    description: 'Processamento ágil de mercadorias para reduzir tempo de permanência e acelerar distribuição.',
    buttonText: '🔥 Atendimento ágil!',
    buttonEmail: '⏳ Fale com a gente por e-mail.'
  },
  {
    imageSrc: 'assets/animacao-prazo-t.png',
    title: 'Distribuição estratégica',
    description: 'Otimização de fluxos para entregas mais rápidas nas principais regiões do Brasil.',
    buttonText: '🧭 Comece aqui!',
    buttonEmail: '🚀 Envia e a gente entrega.'
  }
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

