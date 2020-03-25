import { Injectable } from '@angular/core';
import { Product } from './Product';
import { data } from './MockProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {
  products = 'https://5e7aaa180e0463001633238b.mockapi.io/product';
  constructor(
    private http: HttpClient
  ) { }
  
  addProduct(product){
    let fakeObj = {id: 6, ...product};
    this.products.push(fakeObj);
    console.log(this.products);
  }
  getProducts(id: Number): Observable<Product[]>{
    return this.http.get<Product[]>(this.products);
    // const product = this.products.find(product => product.id == id);
    // console.log(product);
    // if (product) {
    //   return product;
    // } else {
    //   throw Error('Not Found');
    // }
    
  }
}