const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const Payment = require('../models/paymentModel');
const Order = require('../models/orderModel');

const router = express.Router();

// View all transactions
router.get('/transactions', protect, admin, async (req, res) => {
    const payments = await Payment.find().populate('userId', 'name email');
    res.json(payments);
});

// View all orders
router.get('/orders', protect, admin, async (req, res) => {
    const orders = await Order.find().populate('userId', 'name email');
    res.json(orders);
});

module.exports = router;
