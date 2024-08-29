const { baralhos } = require('../data.js')

const atualizarBaralho = (req, res) => {
    const { id } = req.params
    const novoNome = req.body.nome

    const baralho = baralhos.find((baral) => baral.id == id)

    if (!baralho) {
        return res.status(404).send({
            message: 'Baralho não encontrado!',
        })
    }

    baralho.nome = novoNome
    res.status(200).send({
        message: 'Baralho atualizado com sucesso!',
        baralho: baralho
    })
}

module.exports = atualizarBaralho