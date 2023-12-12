import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginProductComponent } from './login-product/login-product.component';
import { SignupProductComponent } from './signup-product/signup-product.component';

const routes: Routes = [
  {path:'',component:SignupProductComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'view-product',component:ViewProductComponent},
  {path:'login-product',component:LoginProductComponent},
  {path:'signup-product',component:SignupProductComponent},
  {path:'update-product/:id',component:UpdateProductComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
