const { body } = require('express-validator');

exports.createOrderValidator = [
    body('items').isArray({ min: 1 }).withMessage('Items must be an array with at least one item'),
    body('totalAmount').isFloat({ gt: 0 }).withMessage('Total amount must be greater than 0'),
];
