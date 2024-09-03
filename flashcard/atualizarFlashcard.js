const { flashcards } = require('../data.js')

const atualizarFlashcard = (req, res) => {
    const { id } = req.params
    const { novoBaral } = req.params
    const novaPergunta = req.body.pergunta
    const novaResposta = req.body.resposta


    const flashcard = flashcards.find((flash) => flash.id == id)

    if(!flashcard) {
        return res.status(404).send({
            message: 'Flashcard não encontrado!'
        })
    }

    flashcard.pergunta = novaPergunta
    flashcard.resposta = novaResposta

    res.status(200).send({
        message: 'Flashcard atualizado com sucesso!',
        flashcard: flashcard
    })
}

module.exports = atualizarFlashcard