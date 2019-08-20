import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { ProdutoAlertaComponent } from './produto-alerta/produto-alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaItemsComponent,
    ProdutoAlertaComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    RouterModule.forRoot([
      { path: '', component: ListaItemsComponent }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
