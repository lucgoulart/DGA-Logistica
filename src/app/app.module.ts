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
import { RastreiosComponent } from './components/rastreios/rastreios/rastreios.component';
import { ContatoComponent } from './components/contato/contato/contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstitucionalComponent } from './components/institucional/institucional/institucional.component';
import { RedesComponent } from './components/redes/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    HeaderComponent,
    FooterComponent,
    PrecoComponent,
    PrazoComponent,
    ColunasImgComponent,
    ParceirosComponent,
    RastreiosComponent,
    ContatoComponent,
    InstitucionalComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
