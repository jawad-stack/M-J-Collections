const express = require('express');
const { processPayment, refundPayment } = require('../controllers/payment');
const { paymentValidator, refundValidator } = require('../dtos/payment');
const validateMiddleware = require('../middlewares/validate');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/process', protect, paymentValidator, validateMiddleware, processPayment);
router.post('/refund', protect, refundValidator, validateMiddleware, refundPayment);

module.exports = router;
