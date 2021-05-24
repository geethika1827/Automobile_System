import { Component, OnInit } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';
import { AutohubService } from '../autohub.service';
import { sellSchema } from '../sellSchema';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  
  customer_details=[];

  constructor(private service:AutohubService) {}
  
  ngOnInit(): void {
  }

  public id: number;
  public name: String;
  public phone: number;
  public car_model: String;
  public address: String;
  public city: String;
  public state: String;
  public price: number;
  
  deleteRow(id_no)
  {
    for(let i = 0; i < this.customer_details.length; ++i)
    {
      if (this.customer_details[i].id === id_no) 
      {
        this.customer_details.splice(i,1);
      }
    }
  }
  
  SubmitOn()
  {
    // if(this.name!=null && this.phone!=null && this.car_model!=null && this.address!=null && this.city!=null 
    //   && this.state!=null && this.price!=null && this.id!=null && this.phone >= 1000000000 && this.phone <= 9999999999){
      var obj:sellSchema=
      {
        id:this.id,
        name:this.name,
        phone:this.phone,
        car_model:this.car_model,
        address:this.address,
        city:this.city,
        state:this.state,
        price:this.price
      } 
      this.service.details.push(obj)
      this.customer_details=this.service.details;
      this.service.add_selling_details(obj).subscribe(); 
    }
  //   else{
  //     alert("Invalid Details");
  //   }
  // }
}
