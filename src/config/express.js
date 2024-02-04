// config/express.js
const express = require('express');
const path = require('path');

const app = express();

// Configuração do diretório público
const publicDirectory = path.join(__dirname, '../../');
app.use(express.static(publicDirectory));

// Configuração da engine de visualização
app.set('views', path.join(publicDirectory, 'views'));
app.set('view engine', 'hbs');

module.exports = app;
