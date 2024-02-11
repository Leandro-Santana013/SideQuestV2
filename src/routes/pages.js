// routes/pages.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("index");
});

router.get('/cadastro', (req, res) => {
  res.render("cadastro");
});

router.get('/login', (req, res) => {
  res.render("login");
});


router.get('/favoritos', (req, res) => {
  res.render("favoritos");
});

router.get('/homeCliente', (req, res) => {
  res.render("homeCliente");
});

router.get('/perfil', (req, res) => {
  res.render("perfil");
});

router.get('/pagamentos', (req, res) => {
  res.render("pagamentos");
});

router.get('/historico', (req, res) => {
  res.render("historico");
});

router.get('/conversas', (req, res) => {
  res.render("conversas");
});

router.get('/error404', (req, res) => {
  res.render("error404");
});

module.exports = router;  