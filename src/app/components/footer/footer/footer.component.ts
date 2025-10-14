import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
