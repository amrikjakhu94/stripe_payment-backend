let express = require('express');
let router = express.Router();

let stripeController = require('./stripe-controller');

router.post('/confirmpayment',stripeController.confirmPayment);

module.exports = router;
