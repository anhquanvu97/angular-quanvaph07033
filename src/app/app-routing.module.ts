import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ManageComponent } from './manage/manage.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent,  data: { animation: 'home' }},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'product/add', component: ProductAddComponent},
  { path: 'product/edit/:id', component: ProductEditComponent},
  { path: 'manage', component: ManageComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product', component: ProductListComponent}, 
  { path: 'product/:id', component: ProductDetailComponent, },
  { path: '**', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
