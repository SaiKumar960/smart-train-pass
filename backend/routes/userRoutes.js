const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/link-bank', userController.linkBankAccount);
router.get('/:aadhaar', userController.getUserByAadhaar);

module.exports = router;
