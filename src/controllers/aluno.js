let alunoService = require('../services/aluno')

const getAlunos = async (req, res, next) => {
    try{
        await alunoService.getAlunos()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch (err) {
        next(err)
    }
}

const postAlunos = async(req, res, next) => {
    try{    
        await alunoService.postAlunos(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch (err){
        next(err)
    }
}

const deleteAlunos = async (req, res, next) => {
    try{
        await alunoService.deleteAlunos(req.params)
            .then(ret => statusbar(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

module.exports.postAlunos = postAlunos
module.exports.getAlunos = getAlunos
module.exports.deleteAlunos = deleteAlunos