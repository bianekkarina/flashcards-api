const { baralhos } = require('../data.js')

const listarBaralhos = (req, res) => {
    res.status(200).send(baralhos)
}

module.exports = listarBaralhos