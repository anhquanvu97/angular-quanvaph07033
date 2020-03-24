import { Component, OnInit } from '@angular/core';
import { data } from '../MockProduct';
import { Product} from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = data;
  constructor() { }

  ngOnInit(): void {
  }
  selected: Product;

  
  removeItem(id){
      this.products = this.products.filter(product => product.id != id);
  }
  detailProduct(product){
    this.selected = product;
  }
}