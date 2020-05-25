import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  //page = 'login Page';
  title = 'Login Page';
  username: any;
  password: any;
  hide = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private commonservice : CommonService  ) {}



  login(loginForm : NgForm){
    //alert("clickec");
    
    
    if(loginForm.value.username=="pasyanthi" && loginForm.value.password=="123456")
    {
     // alert(JSON.stringify(loginForm.value));
      this.router.navigate(['/dashboard',loginForm.value.username]);

      this.commonservice.login(loginForm.value).subscribe((data) =>{
console.log(JSON.stringify(data));
      } );    }
    else{
        return "error";
    }
  }

}
