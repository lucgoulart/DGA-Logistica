import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PrecoComponent } from './components/preco/preco/preco.component';
import { PrazoComponent } from './components/prazo/prazo/prazo.component';
import { ParceirosComponent } from './components/parceiros/parceiros/parceiros.component';
import { RastreiosComponent } from './components/rastreios/rastreios/rastreios.component';
import { ContatoComponent } from './components/contato/contato/contato.component';
import { InstitucionalComponent } from './components/institucional/institucional/institucional.component';
import { RedesComponent } from './components/redes/redes/redes.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'precisao', component: PrecoComponent},
  { path: 'exclusividade', component: PrazoComponent},
  { path: 'parceiros', component: ParceirosComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'institucional', component: InstitucionalComponent},
  { path: 'redes', component: RedesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
