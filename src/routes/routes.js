// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("index");
});

router.get('/cadastro', (req, res) => {
  res.render("cadastro");
});

module.exports = router;
