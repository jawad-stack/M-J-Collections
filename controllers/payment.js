const stripe = require('../config/stripe');
const Payment = require('../models/payment');
const sendEmail = require('../utils/email');

// Process payment
const processPayment = async (req, res) => {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency,
        payment_method_types: ['card'],
    });

    const payment = await Payment.create({
        userId: req.user.id,
        amount,
        currency,
        transactionId: paymentIntent.id,
        status: 'pending',
    });

    await sendEmail(req.user.email, 'Payment Success', `Your payment of ${currency} ${amount} has been processed.`);
    res.json({ clientSecret: paymentIntent.client_secret });
};

// Refund payment
const refundPayment = async (req, res) => {
    const { transactionId } = req.body;

    const payment = await Payment.findOne({ transactionId });
    if (!payment) return res.status(404).json({ message: 'Payment not found' });

    await stripe.refunds.create({ payment_intent: transactionId });
    payment.status = 'refunded';
    await payment.save();

    res.json({ message: 'Refund processed' });
};

module.exports = { processPayment, refundPayment };
