exports.register = (req, res) => {
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcrypt');
  
  // Criar um objeto com as constantes
  const { name, email, cpf, senha, senhaConfirm } = req.body;

  //converte formato CPF para numérico
  const cpfNumerico = cpf.replace(/\D/g, '');

  connection.query("SELECT cd_emailCliente FROM tb_cliente WHERE cd_emailCliente = ?", [email], async (error, results) => {
      if (error) {
          console.log(error);
          return res.status(500).send('/error404');
      }
      
      if (results.length > 0) {
          return res.render('cadastro', {
              message: 'Este Email é invalido ou já está em uso'
          });
      } else if (senha !== senhaConfirm) {
          return res.render('cadastro', {
              message: 'As senhas não estão corretas'
          });
      }
      
      // Hash da senha
      let hash = await bcrypt.hash(senha, 8);

      // Inserir novo cliente
    connection.query('INSERT INTO tb_cliente SET ?', { nm_cliente: name, cd_emailCliente: email, cd_cpfCliente: cpfNumerico, cd_senha: hash }, (error, results) => {
          if (error) {
              console.log(error);
              return res.status(500).send('Erro interno no servidor');
          }
          
          console.log(results);
          return res.render('index');
      });
  });
};

