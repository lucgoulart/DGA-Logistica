import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.scss']
})
export class InstitucionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    downloadCodigoConduta() {
    const link = document.createElement('a');
    link.href = 'assets/codigo-conduta.pdf'; // caminho do PDF na pasta assets
    link.download = 'codigo-conduta.pdf';
    link.click();
  }

}
