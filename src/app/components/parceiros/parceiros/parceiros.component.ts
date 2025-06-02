import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {
  imagens = [
    'assets/parceiro1.jpeg',
    'assets/parceiro2.jpeg',
    'assets/parceiro3.jpeg',
    'assets/parceiro4.jpeg',
    'assets/parceiro1.jpeg',
    'assets/parceiro2.jpeg',
    'assets/parceiro3.jpeg',
    'assets/parceiro4.jpeg'
  ];

  imagensDuplicadas: string[] = [];

  ngOnInit(): void {
    this.imagensDuplicadas = [...this.imagens, ...this.imagens];
  }
}
