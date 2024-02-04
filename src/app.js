// app.js
const app = require('./config/express');
const db = require('./database/db');
const router = require('./routes/routes'); // Renomeei de Router para router

// Configuração das rotas
app.use('/', router);

(async () => {
  try {
    await db.connect();
    console.log('Conexão com o MySQL funcionando');
  } catch (error) {
    console.error(`Erro ao conectar ao MySQL: ${error}`);
  }

  app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
  });
})();
