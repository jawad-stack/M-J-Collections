const { body } = require('express-validator');

exports.createProductValidator = [
    body('name').notEmpty().withMessage('Product name is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
    body('description').notEmpty().withMessage('Description is required'),
    body('stock').isInt({ gt: 0 }).withMessage('Stock must be a positive integer'),
];
