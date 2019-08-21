import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaItemsComponent } from './lista-items/lista-items.component';
import { ProdutoAlertaComponent } from './produto-alerta/produto-alerta.component';
import { DetalheItemsComponent } from './detalhe-items/detalhe-items.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaItemsComponent,
    ProdutoAlertaComponent,
    DetalheItemsComponent,
    TopBarComponent,
    PageNotFoundComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
