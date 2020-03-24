import { Component, OnInit } from '@angular/core';
import { data } from '../MockProduct';
import { Product} from '../Product';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

 products = data;
  constructor() { }

  ngOnInit(): void {
  }
  selected: Product;

  removeItem(id){
      this.products = this.products.filter(product => product.id != id);
  }
}