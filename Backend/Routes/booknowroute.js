const express1=require('express');
const booknowRouter = express1.Router();
const booknow = require('../models/booknow');
const nodemailer = require("nodemailer");

booknowRouter.route('/results').get((req,res,next) => {
    booknow.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
booknowRouter.route('/booking_details').post((req,res,next) => {
    console.log(req.body)
    booknow.create(req.body)
    .then((resp) => {
        const output = `
        <h1 style="margin-bottom:10px">Thank You ${req.body.first_name} for placing order with AUTO HUB</h1>
        <br>
            <h2 style="margin-bottom:10px">We are glad to inform you that , your order has been placed successfully</h2>
        <br>
            <h3 style="margin-bottom:10px">Please Chek Your Order details
        <br>
        Name: ${req.body.first_name}
        <br>
        Car Model: ${req.body.car_model}
        <br>
        Phone no: ${req.body.phone_no}
        <br>
        Date: ${req.body.date}
        <br>
        Address: ${req.body.address}
        <br>
        City: ${req.body.city}
        <br>
        State: ${req.body.state}
        <br>
        Price: ${req.body.price}
        <br>
        </h3>
        `
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'mchaitanyanathsingh@gmail.com',
        pass: '$gvA817H#G*V'
        }
    });
    
        var mailOptions = {
        from: 'mchaitanyanathsingh@gmail.com',
        to: req.body.email_id,
        subject: 'AUTO HUB ORDERED PRODUCT DETAILS',
        html: output
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = booknowRouter; 