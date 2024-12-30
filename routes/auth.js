const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth');
const { registerValidator, loginValidator } = require('../dtos/user');
const validateMiddleware = require('../middlewares/validate');

const router = express.Router();

router.post('/register', registerValidator, validateMiddleware, registerUser);
router.post('/login', loginValidator, validateMiddleware, loginUser);

module.exports = router;
