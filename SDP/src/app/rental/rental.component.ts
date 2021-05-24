import { Component, OnInit } from '@angular/core';
import { rentalSchema } from '../rentalSchema';
import { AutohubService } from '../autohub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor(private service:AutohubService,private router: Router) { }

  public name: string
  public aadhar_no: number
  public car_model: string
  public days: number
  public location: string
  public price: number
  public tax: number

  ngOnInit(): void {
  }
  
  Final(){
    if(this.name!=null && this.aadhar_no!=null && this.car_model!=null && this.days!=null && this.location!=null && this.price!=null && 
      this.aadhar_no >= 100000000000 && this.aadhar_no <= 999999999999)
    {
      var obj:rentalSchema={
        name:this.name,
        aadhar_no:this.aadhar_no,
        car_model:this.car_model,
        days:this.days,
        location:this.location,
        price:this.price,
        tax:this.tax
      }
      this.service.details.push(obj);
      this.service.add_rental_details(obj).subscribe();
      this.tax=this.days*this.price;
      alert("Rental Car Amount to be paid : "+this.tax)
      this.router.navigate(['/payment']);
    }
    else{
      alert("Invalid Rental Details");
    }
  }
}
