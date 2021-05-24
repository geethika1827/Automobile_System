const express1=require('express');
const paymentRouter = express1.Router();
const payment = require('../models/payment');

paymentRouter.route('/results').get((req,res,next) => {
    payment.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
paymentRouter.route('/payment_details').post((req,res,next) => {
    console.log(req.body)
    payment.create(req.body)
    .then((resp) => {
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = paymentRouter; 