import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [],
})
export class NavbarComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(
    store: Store<{ cart: CartModel }>
  ) {
    this.cart$ = store.select('cart');
  }

  ngOnInit() {
  }


}
