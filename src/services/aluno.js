const db = require ('../configs/pg')

const cSql_get = 
    `select id,
            nome,
            sobrenome,
            periodo,
            observacao
       from alunos`

const getAlunos = async (params) => {
    let aluno = {}
    await db.query(cSql_get)
        .then(ret => aluno = {total: ret.rows.length, alunos: ret.rows})
        .catch(err => aluno = err.stack)
    return aluno
}

const sql = 
   `insert into alunos (id, nome, sobrenome, periodo, observacao)
                values ($1, $2, $3, $4, $5)`

const postAlunos = async (params) => {
    const {id, nome, sobrenome, periodo, observacao} = params
    await db.query(sql, [id, nome, sobrenome, periodo, observacao])
}

module.exports.getAlunos = getAlunos
module.exports.postAlunos = postAlunos