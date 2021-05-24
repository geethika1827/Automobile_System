import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutohubService } from '../autohub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email_id:string;
  password:string;
  
  constructor(private service: AutohubService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.email_id == "sdpproject@gmail.com" && this.password == "Charlie@098")
    {
      this.router.navigate(['/home']);
    }
    else{
      alert("Invalid Login Credentials")
    }
  }
}
