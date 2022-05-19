const getAluno = async (params) => {
    let aluno = {}
    if (params.nome === 'Cristyan'){
        aluno.id = 1
        aluno.nome = 'Cristyan'
        aluno.sobrenome = 'Schabarum'
        aluno.notas = []
        aluno.notas.push(10)
        aluno.notas.push(9)
    }else{
        throw 'Aluno não cadastrado!'
    }
    return aluno
}