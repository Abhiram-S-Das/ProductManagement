import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-product',
  templateUrl: './login-product.component.html',
  styleUrls: ['./login-product.component.css']
})
export class LoginProductComponent implements OnInit {

  constructor(private api:ApiService){ }

  ngOnInit(): void {
    
  }
  login(data:any){
this.api.userlogin(data)
  }

}
