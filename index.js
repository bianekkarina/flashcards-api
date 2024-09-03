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

// rotas dos baralhos

const criarBaralho = require('./baralho/criarBaralho')
app.post('/baralho', criarBaralho)

const listarBaralhos = require('./baralho/listarBaralhos')
app.get('/baralho', listarBaralhos)

const atualizarBaralho = require('./baralho/atualizarBaralho')
app.put('/baralho/:id', atualizarBaralho) 

const deletarBaralho = require('./baralho/deletarBaralho')
app.delete('/baralho/:id', deletarBaralho)

// rotas dos flashcards

const criarFlashcard = require('./flashcard/criarFlashcard')
app.post('/flashcard', criarFlashcard)

const listarFlashcards = require('./flashcard/listarFlashcards')
app.get('/flashcard', listarFlashcards)

const atualizarFlashcard = require('./flashcard/atualizarFlashcard')
app.put('/flashcard/:idBaralho/:id', atualizarFlashcard)

const deletarFlashcard = require('./flashcard/deletarFlashcard')
app.delete('/flashcard/:idBaralho/:id', deletarFlashcard)