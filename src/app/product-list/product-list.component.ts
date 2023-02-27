import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  public products : Product[] = []; 

  constructor(private dataService: DataService){
    
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
      image: list[3]
    };
    this.products.push(product);
  }
}
