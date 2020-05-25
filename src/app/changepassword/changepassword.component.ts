import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  title="Change password";
  newpassword: any;
  confirmpassword: any;
  EmailId:any;
  hide = true;
  hide1 = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private commonservice : CommonService  ) {}
  
  changepwd(changepassword : NgForm){
    //alert("clickec");
   // alert(JSON.stringify(changepassword.value));
   if(changepassword.value.newpassword==changepassword.value.confirmpassword){
   
    this.router.navigate(['/dashboard',changepassword.value.EmailId]);

      this.commonservice.Changepassword(changepassword.value);

   }
   else{
    alert("New password and confirm password are not matching");
   }
  }

}
