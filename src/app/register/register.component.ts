import { Component } from '@angular/core';
import{NgForm } from '@angular/forms'
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register Page';
  email: any;
  phoneno: any;
  newpassword: any;
  confirmpassword: any;
  hide = true;
  hide1 = true;
  username: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private commonservice:CommonService){}

  Register(registeracc: NgForm ){

    //alert(JSON.stringify(registeracc.value));

    if(registeracc.value.newpassword==registeracc.value.confirmpassword){
   
      this.router.navigate(['/dashboard',registeracc.value.username]);
  
        this.commonservice.register(registeracc.value).subscribe((data) =>
        {
          console.log(JSON.stringify(data));
        });
           }
     else{
      alert("New password and confirm password are not matching");
     }

  }

}
