const db = require ('../configs/pg')

// Sql
const cSql_get = 
    `select id,
            nome,
            sobrenome,
            periodo,
            observacao
       from alunos`

const cSql_post = 
   `insert into alunos (id, nome, sobrenome, periodo, observacao)
                values ($1, $2, $3, $4, $5)`

const cSql_delete =
    `delete from aluno where id = $1`

// métodods
const getAlunos = async (params) => {
    let aluno = {}
    await db.query(cSql_get)
        .then(ret => aluno = {total: ret.rows.length, alunos: ret.rows})
        .catch(err => aluno = err.stack)
    return aluno
}

const postAlunos = async (params) => {
    const {id, nome, sobrenome, periodo, observacao} = params
    await db.query(cSql_post, [id, nome, sobrenome, periodo, observacao])
}

const deleteAlunos = async (params) => {
    const {id} = params
    await db.query(cSql_delete, [id])
}

module.exports.getAlunos = getAlunos
module.exports.postAlunos = postAlunos