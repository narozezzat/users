import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  userAge : number = 17;
  isAdmin : boolean = false
  products : string[] = ['Laptop' , 'Mobile' , 'Mic' , 'headphones']
}
