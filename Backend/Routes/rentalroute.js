const express1=require('express');
const rentalRouter = express1.Router();
const rental = require('../models/rental');

rentalRouter.route('/results').get((req,res,next) => {
    rental.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
rentalRouter.route('/rental_details').post((req,res,next) => {
    console.log(req.body)
    rental.create(req.body)
    .then((resp) => {
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = rentalRouter; 