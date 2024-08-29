const { baralhos, flashcards } = require('../data.js')

const deletarBaralho = (req, res) => {
    const { id } = req.params
    const index = baralhos.findIndex((baral) => baral.id == id)

    if (index === -1) {
        return res.status(404).send('Baralho não encontrado!')
    }

    const baralhoDeletado = baralhos.splice(index, 1)[0]

    flashcards.forEach((flashcard, index) => {
        if (flashcard.idBaralho == id) {
            flashcards.splice(index, 1)
        }
    })

    res.status(200).send({
        message: 'Baralho deletado com sucesso!',
        baralho: baralhoDeletado
    })
}

module.exports = deletarBaralho