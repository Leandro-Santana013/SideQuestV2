const express = require('express');
const controllers = require('../controllers/userController');
const router = express.Router();  // Use express.Router() aqui

router.post('/register', controllers.register);

module.exports = router; 
