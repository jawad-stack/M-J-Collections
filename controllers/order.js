const Order = require('../models/order');

// Create an order
const createOrder = async (req, res) => {
    const { items, totalAmount, paymentStatus } = req.body;

    const order = new Order({
        userId: req.user.id,
        items,
        totalAmount,
        paymentStatus,
    });

    await order.save();
    res.status(201).json(order);
};

module.exports = { createOrder };
