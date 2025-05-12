import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { PrecoComponent } from './components/preco/preco/preco.component';
import { PrazoComponent } from './components/prazo/prazo/prazo.component';
import { ColunasImgComponent } from './components/colunas-img/colunas-img/colunas-img.component';
import { ParceirosComponent } from './components/parceiros/parceiros/parceiros.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    HeaderComponent,
    FooterComponent,
    PrecoComponent,
    PrazoComponent,
    ColunasImgComponent,
    ParceirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
