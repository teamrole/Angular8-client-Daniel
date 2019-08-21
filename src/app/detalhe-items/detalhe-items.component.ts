  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute} from '@angular/router';

  import {items} from '../data-mock/items';
  import { CartService } from '../cart.service';

@Component({
  selector: 'app-detalhe-items',
  templateUrl: './detalhe-items.component.html',
  styleUrls: ['./detalhe-items.component.css']
})
export class DetalheItemsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = items[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Seu produto foi adicionado ao carrinho');
    this.cartService.addToCart(product);
  }

}
