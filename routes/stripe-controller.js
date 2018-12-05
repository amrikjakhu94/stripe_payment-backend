let Stripe = require('../models/Stripe')
const stripe = require("stripe")("sk_test_mU48LRBgjjYjTfeE1UQXD7cT");

exports.confirmPayment = async (req,res)=>{
    // console.log(req.body,'oooooooooooooooo')

    const token = req.body.id;
    const charge = await stripe.charges.create({
        amount: 999,
        currency: 'usd',
        description: 'Example charge',
        source: token,
        capture: false,
      });

    //   const charge = await stripe.Charges.capture('ch_KEWhCKgCx7UIAe0wbqIa')
      
    console.log(charge,'asd');
    return res.status(200).json({ success : 'Payment done' });
}
