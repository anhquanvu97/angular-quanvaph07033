import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule , AppRoutingModule],
  declarations: [ AppComponent, CategoryComponent, ProductComponent, ProductListComponent, SlideshowComponent, ProductAddComponent, HomeComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
