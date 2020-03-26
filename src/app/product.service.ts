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
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.products);
  }
  getProduct(id: Number): Observable<Product>{
    return this.http.get<Product>(`${this.products}/${id}`);
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.products}`, product);
  }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.products}/${product.id}`, product);
  }
  deleteProduct(id: Number): Observable<Product>{
    return this.http.delete<Product>(`${this.products}/${id}`);
  }
}