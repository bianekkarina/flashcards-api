const { flashcards } = require('../data.js')

const criarFlashcard = (req, res) => {
    const novoFlashcard = {
        id: flashcards.length + 1,
        pergunta: req.body.pergunta,
        resposta: req.body.resposta,
        idBaralho: req.body.idBaralho
    }

    flashcards.push(novoFlashcard)
    res.status(201).send({
        message: 'Flashcard criado com sucesso!',
        flashcard: novoFlashcard
    })
}

module.exports = criarFlashcard