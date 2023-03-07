import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { CartServiceService } from '../service/cart-service.service';
import { Product, ItemType } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  public productsMap: Map<string, Product[]> = new Map();
  private firstItemType: string = "";

  constructor(private dataService: DataService, private cartService: CartServiceService){
    
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): any {
      this.dataService.getProducts().subscribe((data : string)=>{
        const list = data.split('\n');
        list.forEach((thisData : string) => {
          this.addProduct(thisData);
        });
      });
  }

  addProduct(data : string)
  {
    const list = data.split(',');
    let product: Product = {
      name: list[0],
      quantity: Number(list[1]),
      cost: Number(list[2]),
      image: list[4]
    };

    list[3] = this.titleCaseWord(list[3]);
    let itemType = list[3] as keyof typeof ItemType;
    if (this.productsMap.get(itemType) == null)
    {
      this.productsMap.set(itemType, []);
    }
    
    this.productsMap.get(itemType)?.push(product);

    if (this.firstItemType == "")
    {
      this.firstItemType = itemType;
    }
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  getProductList(itemType: string) {
    return this.productsMap.get(itemType);
  }

  hasProduct(itemType: string)
  {
    if (this.productsMap.get(itemType) == null) return false;
    return true;
  }

  showAsActive(itemType: string)
  {
    return this.firstItemType == itemType;
  }

  addToCart(item: Product)
  {
    this.cartService.addProductToCart(item);
  }

  removeCart(item: Product)
  {
    this.cartService.removeFromCart(item);
  }
}
