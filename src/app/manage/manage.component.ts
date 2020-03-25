import { Component, OnInit } from '@angular/core';
import { data } from '../MockProduct';
import { Product} from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

 products = data;
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
      this.products = this.products.filter(funproduct => product.id != id);
  }
}