const express1=require('express');
const signupRouter = express1.Router();
const signup =require('../models/signup');

signupRouter.route('/results').get((req,res,next) => {
    signup.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
signupRouter.route('/signupdetails').post((req,res,next) => {
    console.log(req.body)
    signup.create(req.body)
    .then((resp) => {
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
signupRouter.route('/getuser/:email_id/:password').get((req,res,next) => {
    signup.find({ emai_id: req.params.email_id, password : req.params.password})
    .then((resp) => {
        if(resp.length==0)
        {
            const err=new Error('Invalid details');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.json(err);
            return next(err);
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = signupRouter; 