class Turma {
  constructor(nome) {
    this.nome = nome
    this.alunos = []
    this.disciplinas = []
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno)
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina)
  }
}

module.exports = Turma