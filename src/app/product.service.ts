import { Injectable } from '@angular/core';
import { Product } from './Product';
import { data } from './MockProduct';

@Injectable()

export class ProductService {
  products = data;
  constructor() { }
  
  addProduct(product){
    let fakeObj = {id: 6, ...product};
    this.products.push(fakeObj);
    console.log(this.products);
  }
  getProduct(id: Number){
    const product = this.products.find(product => product.id == id);
    console.log(product);
    if (product) {
      return product;
    } else {
      throw Error('Not Found');
    }
    
  }
}