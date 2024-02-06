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
  } catch (error) {
    console.error(`Erro ao conectar ao MySQL: ${error}`);
  }

  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

})();
