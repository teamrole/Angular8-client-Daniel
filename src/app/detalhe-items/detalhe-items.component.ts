  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute} from '@angular/router';

  import {items} from '../data-mock/items';

@Component({
  selector: 'app-detalhe-items',
  templateUrl: './detalhe-items.component.html',
  styleUrls: ['./detalhe-items.component.css']
})
export class DetalheItemsComponent implements OnInit {

  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = items[+params.get('productId')];
    });
  }

}
