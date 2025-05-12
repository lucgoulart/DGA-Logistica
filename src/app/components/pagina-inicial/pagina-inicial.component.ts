import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit, OnDestroy {
  imageList1: string[] = [
    'assets/cargo-truck.jfif',
    'assets/trade-transport.jfif',
    // adicione mais imagens conforme necessário
  ];


  imageList2: string[] = [
    'assets/galpao-logistico.avif',
    'assets/people-work.jfif',
    // adicione mais imagens conforme necessário
  ];

  showLogo: boolean = true;
  currentImageIndex: number = 0;
  imageChangeInterval: any;

  ngOnInit(): void {
    this.startImageChange();

  // Após 9 segundos, o logo desaparece
  setTimeout(() => {
    this.showLogo = false;
  }, 9000);
  }

  ngOnDestroy(): void {
    if (this.imageChangeInterval) {
      clearInterval(this.imageChangeInterval);
    }
  }

  startImageChange(): void {
    this.imageChangeInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageList1.length;
    }, 5000); // muda a imagem a cada 2 segundos
  }
}
