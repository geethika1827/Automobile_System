const express1=require('express');
const sellrouter = express1.Router();
const sell = require('../models/sell');

sellrouter.route('/results').get((req,res,next) => {
    sell.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
sellrouter.route('/sellingdetails').post((req,res,next) => {
    console.log(req.body)
    sell.create(req.body)
    .then((resp) => {
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = sellrouter; 