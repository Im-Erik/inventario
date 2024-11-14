
import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';

/**
* @ProductDepartment: A component to show the breadcrumbs to a
* Product's department
*/
@Component({
  selector: 'product-department ',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-department.component.html',
  styleUrl: './product-department.component.scss'
})



export class ProductDepartmentComponent {
  @Input() product!: Product;
}