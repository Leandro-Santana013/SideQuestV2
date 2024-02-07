exports.register = (req, res) => {
    
    const jtw = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
    // Criar um objeto com as constantes
    const {name, email, cpf, senha, senhaConfirm} = req.body;
      
   
    
    

    res.send(email); 
};
