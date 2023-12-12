import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {productdata, signup} from '../app/productmodel';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router) { }

  // adding product

  addproduct(data:productdata){
    return this.http.post("http://localhost:3000/product",data)
  }


  // display product

  getproduct(){
    return this.http.get<productdata[]>("http://localhost:3000/product/")
  }

  // delete product

  deleteproduct(id:number){
    return this.http.delete("http://localhost:3000/product/"+id)
  }

  // update product

  updateproduct(product:productdata,id:number){
    return this.http.put<productdata>("http://localhost:3000/product/"+id,product)
  }

  // on edit product

  getproductbyid(id:string){
    return this.http.get<productdata>("http://localhost:3000/product/"+id)
  }

  // signup

  signup(data:signup){
    return this.http.post('http://localhost:3000/signup',data)
  }

  // login

  userlogin(data:any){
    return this.http.get(`http://localhost:3000/signup?email=${data.email}&$password=${data.$password}`,{observe:'response'})
    .subscribe((value:any)=>{
      console.log(value)
      if(value.body.length==1){
        this.router.navigate(['/view-product'])
      }else{
        alert("invalid mail or password")
      }
      
    })
  }
}
