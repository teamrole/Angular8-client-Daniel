import { Component, OnInit } from '@angular/core';
import {items} from '../data-mock/items';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent {
  items = items;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(nome: String){
    window.alert('Você será notificado se alguém quiser rachar a(o) '+ nome);
  }

  
}
