// app.js
const app = require('./config/express');
const db = require('./database/db');
const view = require('./routes/pages');
const authController = require ('./routes/auth');



app.use('/auth', authController);  // Use o roteador de auth.js para '/register' primeiro
app.use('/', view);    // Em seguida, use o roteador de pages.js para o caminho raiz


(async () => {
  try {
    await db.connect();
    console.log('Conexão com o MySQL funcionando');
  // Execute a consulta SQL para selecionar o campo nm_cliente
  connection.query('SELECT nm_cliente FROM tb_cliente', (error, results, fields) => {
    if (error) {
      console.error(`Erro ao executar consulta: ${error}`);
      return;
    }

    // Exiba os resultados
    console.log('Clientes:');
    results.forEach(result => {
      console.log(result.nm_cliente);
    });
  });

  } catch (error) {
    console.error(`Erro a conectar ao MySQL: ${error}`);
  }

app.listen(5000, () => {
  console.log(`Server running on port`);
});
})();
