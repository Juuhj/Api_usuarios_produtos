import express from 'express'
import ProdutoController from '../controllers/produtoController.js'

const router = express.Router();

router.post('/produtos', ProdutoController.novoProduto);

export default router;