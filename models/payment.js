const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        amount: { type: Number, required: true },
        currency: { type: String, required: true },
        transactionId: { type: String, required: true },
        status: { type: String, enum: ['pending', 'successful', 'refunded'], default: 'pending' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);
