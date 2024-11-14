import { Component, Input, Output, HostBinding } from '@angular/core';
import { Product } from '../../model/product';

/**
* @ProductImage: A component to show a single Product's image
*/
@Component({
  selector: 'product-image',
  standalone: true,
  imports:[],
  templateUrl:'./product-image.component.html',
  styleUrl: './product-image.component.scss'
})
export class ProductImageComponent {
  @Input() product: Product | null = null;
  @HostBinding('attr.class') cssClass = 'ui small image';
}
