const { flashcards } = require('../data.js')

const deletarFlashcard = (req, res) => {
    const { id } = req.params
    const { idBaralho } = req.params
    const index = flashcards.findIndex((flash) => flash.id == id)

    if (index === -1) {
        return res.status(400).send('Flashcard não encontrado!')
    }

    const flashcardDeletado = flashcards.splice(index, 1)[0]

    flashcards.forEach((flashcard, index) => {
        if (flashcard.idBaralho == id) {
            flashcards.splice(index, 1);
        }
    })

    res.status(200).send({
        message: 'Flashcard deletado com sucesso!',
        flashcard: flashcardDeletado
    })
}

module.exports = deletarFlashcard 