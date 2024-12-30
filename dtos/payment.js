const { body } = require('express-validator');

exports.paymentValidator = [
    body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than 0'),
    body('currency').isIn(['usd', 'eur', 'gbp']).withMessage('Invalid currency'),
];

exports.refundValidator = [
    body('transactionId').notEmpty().withMessage('Transaction ID is required'),
];
