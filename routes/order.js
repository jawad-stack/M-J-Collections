const express = require('express');
const { createOrder } = require('../controllers/order');
const { createOrderValidator } = require('../dtos/order');
const validateMiddleware = require('../middlewares/validate');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/', protect, createOrderValidator, validateMiddleware, createOrder);

module.exports = router;
