import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginProductComponent } from './login-product/login-product.component';
import { SignupProductComponent } from './signup-product/signup-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    LoginProductComponent,
    SignupProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
