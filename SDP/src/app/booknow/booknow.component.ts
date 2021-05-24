import { Component, OnInit } from '@angular/core';
import { AutohubService } from '../autohub.service';
import { booknowSchema } from '../booknowSchema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  constructor(private service:AutohubService,private router: Router) { }

  ngOnInit(): void {
  }
  public first_name: String;
  public last_name: String;
  public phone_no: number;
  public email_id:String;
  public car_model: String;
  public address: String;
  public city: String;
  public state: String;
  public price: string;
  public date: Date;
  public output: number;

  Finish()
  {
    if(this.first_name!=null && this.last_name!=null && this.phone_no!=null && this.email_id!=null && this.car_model!=null &&
      this.address!=null && this.city!=null && this.state!=null && this.price!=null && this.date!=null && this.phone_no >= 1000000000 &&
      this.phone_no <= 9999999999)
    {    
      var obj:booknowSchema={
          first_name:this.first_name,
          last_name:this.last_name,
          email_id:this.email_id, 
          car_model:this.car_model,
          phone_no:this.phone_no,
          date:this.date,
          address:this.address,
          city:this.city,
          state:this.state,
          price:this.price,
          output:this.output,
        }
      
      this.output=(0.18* parseInt(this.price) + parseInt(this.price));
      this.service.add_booking_details(obj).subscribe();
      this.router.navigate(['/payment']);
    }
    else{
      alert("Invalid Details");
    }
  }
}
