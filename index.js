const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor express está funcionando!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

const criarBaralho = require('./baralho/criarBaralho')
app.post('/baralhos', criarBaralho)

const listarBaralhos = require('./baralho/listarBaralhos')
app.get('/baralho', listarBaralhos)

const atualizarBaralho = require('./baralho/atualizarBaralho')
app.put('/baralho/:id', atualizarBaralho) 

const deletarBaralho = require('./baralho/deletarBaralho')
app.delete('/baralho/:id', deletarBaralho)