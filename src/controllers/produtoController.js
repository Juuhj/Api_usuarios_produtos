import Produto from '../models/produto.js'

class ProdutoController {
    static async novoProduto(req, res) {
        const {nome, preco, imagem, link_produto, categoria, frete_gratis} = req.body

        if(!nome || !preco || !imagem || !link_produto || !categoria || !frete_gratis){
            return res.status(400).json({message: 'Nome, preco, imagem, link_produto, categoria, frete_gratis são necessários'})
        }
        try{
            const produto = await Produto.novoProduto(nome, preco, imagem, link_produto, categoria, frete_gratis);
            res.status(201).json(produto);
        }catch(error){
            console.error('Erro ao criar produto', error);
            res.status(500).json({message:'Erro ao criar o produto', error: error.message});
        }
    }
}

export default ProdutoController;