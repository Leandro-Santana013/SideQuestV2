exports.register = async (req, res) => {
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
  
    try {
      const { name, email, cpf, senha, senhaConfirm } = req.body;
  
      const cpfNumerico = cpf.replace(/\D/g, '');
  
      const emailResults = await queryAsync("SELECT cd_emailCliente FROM tb_cliente WHERE cd_emailCliente = ?", [email]);
  
      if (emailResults.length > 0) {
        return res.render('cadastro', {
          message: 'Este Email é inválido ou já está em uso'
        });
      } else if (senha !== senhaConfirm) {
        return res.render('cadastro', {
          message: 'As senhas não estão corretas'
        });
      }
  
      const cpfResults = await queryAsync("SELECT cd_cpfCliente FROM tb_cliente WHERE cd_cpfCliente = ?", [cpfNumerico]);
  
      if (cpfResults.length > 0) {
        return res.render('cadastro', {
          message: 'Alguns desses dados estão incorretos ou estão sendo utilizados'
        });
      }
  
      // Hash da senha
      let hash = await bcrypt.hash(senha, 8);
  
      // Inserir novo cliente
      await queryAsync('INSERT INTO tb_cliente SET ?', { nm_cliente: name, cd_emailCliente: email, cd_cpfCliente: cpfNumerico, cd_senha: hash });

      return res.render('index');
      
    } catch (error) {
      console.error(error);
      return res.status(500).render('error404');
    }
  };
  
  function queryAsync(sql, values) {
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
          console.error(error)
        } else {
          resolve(results);
          console.log(results)
        }
      });
    });
  }