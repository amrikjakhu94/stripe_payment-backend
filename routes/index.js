const express = require('express');
const router = express.Router();
const stripeRouter = require('./stripe-route');

router.get('/',(req,res)=>{
    res.send('Welcome to stripe payment gateway...')
});

router.use(stripeRouter);

module.exports = router;
