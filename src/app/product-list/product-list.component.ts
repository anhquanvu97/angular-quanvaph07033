import { Component, OnInit } from '@angular/core';
import { data } from '../MockProduct';
import { Product} from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  // selected: Product;

  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }
  removeItem(id){
      this.products = this.products.filter(product => product.id != id);
  }
  detailProduct(product){
    // this.selected = product;
  }
}