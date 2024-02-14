const express = require('express');
const userControllers = require('../controllers/userController');
const router = express.Router();

router.post('/register', controllers.register);
router.post('/login', controllers.login);


router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
router.get('/confirmarEmail', userControllers.validaEmail)

module.exports = router; 
