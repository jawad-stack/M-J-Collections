const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        items: [{ name: String, quantity: Number, price: Number }],
        totalAmount: { type: Number, required: true },
        paymentStatus: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
