import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-product',
  templateUrl: './signup-product.component.html',
  styleUrls: ['./signup-product.component.css']
})
export class SignupProductComponent implements OnInit {

  constructor(private api:ApiService,private route:Router) { }

  ngOnInit(): void {
    
  }

  signup(data:any){
    this.api.signup(data).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/login-product'])
      
    })

  }

}
