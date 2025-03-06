import express from 'express'
import { testarConexao } from './db.js'

const app = express(); // criar instancia do express

testarConexao();

const porta = 3000
app.listen(porta, () => {
    console.log(`Api rodando na porta http://localhost:${porta}`);
})