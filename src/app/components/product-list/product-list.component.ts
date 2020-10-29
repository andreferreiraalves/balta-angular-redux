import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { add } from 'src/app/actions/cart.action';
import { DataService } from 'src/app/data.service';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [],
})
export class ProductListComponent implements OnInit {
  public products: any[] = null;

  constructor(
    private store: Store<CartModel>,
    private toastCtrl: ToastController,
    private service: DataService,
  ) { }

  ngOnInit() {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  async add(product) {
    // this.store.dispatch(add(product));
    this.store.dispatch(add(product));

    const toast = await this.toastCtrl.create({
      message: `${product.title} adicionado ao carrinho`,
      duration: 2000
    });
    toast.present();
  }
}
