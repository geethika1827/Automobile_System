import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooknowComponent } from './booknow/booknow.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellComponent } from './sell/sell.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  {path:'payment',component:PaymentComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'buy',component:BuyComponent},
  {path:'sell',component:SellComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'booknow',component:BooknowComponent},
  {path:'rental',component:RentalComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
