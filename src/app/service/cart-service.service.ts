import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public cartMap: Map<string, Product> = new Map();

  constructor() 
  {

  }

  public removeFromCart(product : Product)
  {
    let key = product.name;
    let thisProduct = this.cartMap.get(key);
    if (!thisProduct) return;

    thisProduct.quantity -= 1;
    this.cartMap.delete(key);
    if (thisProduct.quantity > 0)
    {
      this.cartMap.set(key, product);
    }
  }

  public addProductToCart(product : Product)
  {
    let key = product.name;
    if (!this.cartMap.get(key))
    {
      product.quantity = 1;
      this.cartMap.set(key, product);
    }
    else
    {
      let existingQuantity = this.cartMap.get(key)?.quantity;
      if (existingQuantity == undefined) existingQuantity = 0;

      product.quantity = existingQuantity + 1;
      this.cartMap.delete(key);
      this.cartMap.set(key, product);
    }
  }

  public getAllProductList() : Product[] {
    let productList: Product[] = [];

    this.cartMap.forEach((product, key) => {
      productList.push(product);
    });
    return productList;
  }

  public getCartItemCount()
  {
    let productList: Product[] = this.getAllProductList();
    let cartItemCount: number = 0;

    productList.forEach(product => {
      cartItemCount += product.quantity;
    });

    return cartItemCount;
  }

}
