const { flashcards } = require('../data.js')

const listarBaralhos = (req, res) => {
    res.status(200).send(flashcards)
}

module.exports = listarBaralhos