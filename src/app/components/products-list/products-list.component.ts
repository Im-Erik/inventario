import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { ProductRowComponent } from '../product-row/product-row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [ProductRowComponent, CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})

export class ProductsListComponent {

  @Input() productList: Product[] = [];
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product | null = null;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}