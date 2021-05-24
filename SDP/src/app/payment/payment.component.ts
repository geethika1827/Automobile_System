import { Component, OnInit } from '@angular/core';
import { paymentSchema } from '../paymentSchema';
import { Router } from '@angular/router';
import { AutohubService } from '../autohub.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private service:AutohubService,private router: Router) { }

  public card_no: Number;
  public card_holder: String;
  public CVV: Number;
  public expiry_date: Date;
  public card_type: String;
  public phone_no: Number;
  public otp: Number=Math.floor((Math.random() * 1000) + 1);
  public otp_user: Number;

  ngOnInit(): void {
  }

  myFunction(){
    if(this.card_no!=null && this.card_holder!=null && this.CVV!=null && this.expiry_date!=null && this.CVV >= 100 && this.CVV<=999
      && this.card_no >= 1000000000000000 && this.card_no <= 9999999999999999 && this.card_type!=null && this.phone_no!=null &&
      this.phone_no >= 1000000000 && this.phone_no <= 9999999999)
    {
      alert("Your One Time Password : "+this.otp)
    }
    else{
      alert("Invalid Card Details")
    }
  }
  payment()
  {
    if(this.card_no!=null && this.card_holder!=null && this.CVV!=null && this.expiry_date!=null && this.CVV >= 100 && this.CVV<=999
    && this.card_no >= 1000000000000000 && this.card_no <= 9999999999999999 && this.card_type!=null && this.phone_no!=null &&
    this.phone_no >= 1000000000 && this.phone_no <= 9999999999 && this.otp==this.otp_user) 
    {
      var obj:paymentSchema={
        card_no:this.card_no,
        card_holder:this.card_holder,
        CVV:this.CVV,
        expiry_date:this.expiry_date,
        card_type:this.card_type,
        phone_no:this.phone_no,
        otp_user:this.otp_user
      }
      
      this.service.details.push(obj);
      this.service.add_payment_details(obj).subscribe();
      alert("Transaction Successful Message Receieved to Registered Mobile Number");
    }
    else{
      alert("Incorrect OTP")
    }
  }

}
