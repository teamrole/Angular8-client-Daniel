import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-produto-alerta',
  templateUrl: './produto-alerta.component.html',
  styleUrls: ['./produto-alerta.component.css']
})
export class ProdutoAlertaComponent implements OnInit {

  @Input() product;
  @Output() notify = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

}
