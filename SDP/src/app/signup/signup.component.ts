import { Component, OnInit } from '@angular/core';
import { AutohubService } from '../autohub.service';
import { signupSchema } from '../signupSchema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:AutohubService,private router:Router) { }

  ngOnInit(): void {
  }
  public first_name: String;
  public last_name: String;
  public email_id:String;
  public password:String;
  public confirm_password:String;
  
Submit(){
    if( (this.password == this.confirm_password) && this.first_name!=null && this.last_name!=null && this.email_id!=null) 
    {
      this.router.navigate(['/home']);
      var obj:signupSchema=
      {
        first_name:this.first_name,
        last_name:this.last_name,
        email_id:this.email_id, 
        password:this.password,
        confirm_password:this.confirm_password   
      }
      this.service.add_signup_details(obj).subscribe();

    }
    else{
      alert("Invalid Details");
    }
  }
}
