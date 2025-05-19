import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.scss']
})
export class PrecoComponent implements OnInit, AfterViewInit {

  @ViewChild('videoRef') videoElement!: ElementRef;
  isLoading: boolean = true;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
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

  ngAfterViewInit(): void {
    const video = this.videoElement.nativeElement;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        video.muted = true;
        video.load();
        video.play().catch((err: any) => {
          console.warn('Erro ao tentar rodar vídeo visível:', err);
        });

        observer.disconnect();
      }
    }, {
      threshold: 0.5
    });

    observer.observe(video);
  }
}
