
import { Component, Input } from '@angular/core';

/**
* @PriceDisplay: A component to show the price of a
* Product
*/
@Component({
  selector: 'price-display',
  standalone:true,
  imports:[],
  template: `
<div class="price-display">\${{ price }}</div>
`,
styleUrl: './price-display.component.scss'
})
export class PriceDisplayComponent {
  @Input() price: number | null = null;
}