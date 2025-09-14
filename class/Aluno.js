const Usuario = require("./Usuario")

class Aluno extends Usuario {
  constructor(nome, idade) {
    super(nome, idade)
    this.notas = []
  }

  acessoPainel() {
    return "Painel do Aluno: consultar notas e disciplinas"
  }

  adicionarNota(nota) {
    this.notas.push(nota)
  }
}

module.exports = Aluno