import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { sellSchema } from './sellSchema';

@Injectable({
  providedIn: 'root'
})
export class AutohubService {

  details=[]
  emailname;
  
  constructor(private http:HttpClient) { }
  baseUrl: string = 'http://localhost:3004/posts/'; 

  add_booking_details(booking_details){
    console.log();
    return this.http.post("http://localhost:3000/booknow/booking_details",booking_details)
  }
  add_signup_details(signupdetails){
    console.log();
    return this.http.post("http://localhost:3000/signup/signupdetails",signupdetails)
  }
  add_selling_details(sellingdetails){
    return this.http.post("http://localhost:3000/sell/sellingdetails",sellingdetails)
  }
  delete_selling_details(sellingdetails) {  
    return this.http.delete("http://localhost:3000/sell/sellingdetails",sellingdetails);  
  }
  update_selling_details(sellingdetails) {  
    return this.http.put("http://localhost:3000/sell/sellingdetails",sellingdetails); 
  }
  get_selling_details() {  
    return this.http.get("http://localhost:3000/sell/sellingdetails"); 
  }
  add_payment_details(payment_details){
    return this.http.post("http://localhost:3000/payment/payment_details",payment_details);
  }
  add_rental_details(rental_details){
    return this.http.post("http://localhost:3000/rental/rental_details",rental_details);
  }
  getuser(email_id,password)
  {
    return this.http.get(`http://localhost:4500/signup/getUser/${email_id}/${password}`)
  }
}