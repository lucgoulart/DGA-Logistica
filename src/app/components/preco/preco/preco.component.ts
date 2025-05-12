import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.scss']
})
export class PrecoComponent implements OnInit {

  @ViewChild('videoRef') videoElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      const video = this.videoElement.nativeElement;
      video.muted = true;
      video.load();
      video.play().catch((err: any) => {
        console.warn('Erro ao tentar rodar vídeo (com delay):', err);
      });
    }, 300);
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
}
