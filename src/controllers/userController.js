exports.register = (req, res) => {
    const db = require('../database/db.js');
    const jtw = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
    // Criar um objeto com as constantes
    const {name, email, cpf, senha, senhaConfirm} = req.body;
      
    db.query("SELECT cd_emailCliente FROM tb_cliente where cd_emailCliente = ?", [email], async (error, results) => {
        if (error) {
            console.error(error);
        }
    
        if (results.length > 0) {
            return res.render('cadastro', {
                message: 'Esse email já está sendo usado'
            });
        } else  {
            let senhaCript = await bcrypt.hash(senha, 8);
            console.log(senhaCript);
            // Execute qualquer lógica adicional necessária aqui
            return res.send("Registration successful!");
        }
    });
    
    

    res.send("Registration successul!"); 
};
