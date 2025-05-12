import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PrecoComponent } from './components/preco/preco/preco.component';
import { PrazoComponent } from './components/prazo/prazo/prazo.component';
import { ParceirosComponent } from './components/parceiros/parceiros/parceiros.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'preco', component: PrecoComponent},
  { path: 'prazo', component: PrazoComponent},
  { path: 'parceiros', component: ParceirosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
