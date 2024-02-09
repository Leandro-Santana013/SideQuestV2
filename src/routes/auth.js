const express = require('express');
const controllers = require('../controllers/userController');
const router = express.Router();

router.post('/register', controllers.register);

module.exports = router; 
