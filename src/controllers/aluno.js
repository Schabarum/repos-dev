let alunoService = require('..service/aluno')

const getAlunos = async (req, res, next) => {
    try{
        await alunoService.getAlunos(req.params)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch (err) {
        next(err)
    }
}

module.exports.getAlunos = getAlunos