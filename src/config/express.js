// config/express.js
const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: 'sua_chave_secreta_aqui',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // Tempo de expiração em milissegundos (1 minuto neste exemplo)
  }));
  

// Configuração do diretório público
const publicDirectory = path.join(__dirname, '../../front/');
app.use(express.static(publicDirectory));

// Configuração da engine de visualização
app.set('views', path.join(publicDirectory, 'views'));
app.set('view engine', 'hbs');

module.exports = app;
