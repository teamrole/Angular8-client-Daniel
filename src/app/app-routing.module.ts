import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaItemsComponent } from './lista-items/lista-items.component';
import { DetalheItemsComponent } from './detalhe-items/detalhe-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ListaItemsComponent },
  { path: 'products/:productId', component: DetalheItemsComponent },
  /*
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  */
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
