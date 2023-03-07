import { Component } from '@angular/core';
import { Product } from '../model/product';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartServiceService){
    
  }

  public getAllProductList() : Product[]
  {
    return this.cartService.getAllProductList();
  }

  addCart(item: Product)
  {
    this.cartService.addProductToCart(item);
  }

  removeCart(item: Product)
  {
    this.cartService.removeFromCart(item);
  }
}
