import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './model/product';
import { ProductsListComponent } from './components/products-list/products-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  products: Product[]; 

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Zapatillas',
        'images/zapatiila.png',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'JACKET',
        'Blue Jacket',
        'images/chaqueta.png',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'images/gorra.png',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }


  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

}