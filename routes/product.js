const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/product');
const { createProductValidator } = require('../dtos/product');
const validateMiddleware = require('../middlewares/validate');
const { protect } = require('../middlewares/auth');
const { admin } = require('../middlewares/admin');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', protect, admin, createProductValidator, validateMiddleware, createProduct);

module.exports = router;
