const { json } = require("node:stream/consumers")
const Usuario = require("./Usuario")
const util = require("node:util")

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

  [util.inspect.custom]() {
    return `Aluno { nome: ${this.getNome()}, idade: ${this.getIdade()} }`
  }
}

module.exports = Aluno