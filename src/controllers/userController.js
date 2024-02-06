exports.register = (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const cpf = req.body.cpf;
    const senha = req.body.senha;

    // Criar um array com as constantes
    const user = [name, email, cpf, senha];

    // Exibir o array no console
    console.log("informações user:", user);

    res.send("Registration successful!"); 
};
