import { Component } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private cartService: CartServiceService){
    
  }

  getCartItemCount()
  {
    return this.cartService.getCartItemCount();
  }
}
