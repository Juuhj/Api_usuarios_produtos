import Usuario from '../models/usuario.js'

class UsuarioController {
    static async novoUsuario(req, res) {
        const { nome, email, senha } = req.body;

        //Validando dados
        if(!nome || !email || !senha){
            return res.status(400).json({message: 'Nome, Email e senha são obrigatórios'})
        }
        try{
            // chama o metodo na classe usuario para criar um novo usuario
            const usuario =  await Usuario.novoUsuario(nome, email, senha);
            res.status(201).json(usuario);
        }catch(error){
            console.error('Erro ao criar o usuario', error);
            res.status(500).json({message: 'Erro ao criar o usuário', error: error.message});
        }
    }
}

export default UsuarioController;