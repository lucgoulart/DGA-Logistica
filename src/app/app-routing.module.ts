import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PrecoComponent } from './components/preco/preco/preco.component';
import { PrazoComponent } from './components/prazo/prazo/prazo.component';
import { ParceirosComponent } from './components/parceiros/parceiros/parceiros.component';
import { RastreiosComponent } from './components/rastreios/rastreios/rastreios.component';
import { ContatoComponent } from './components/contato/contato/contato.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'preco', component: PrecoComponent},
  { path: 'prazo', component: PrazoComponent},
  { path: 'parceiros', component: ParceirosComponent},
  { path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
