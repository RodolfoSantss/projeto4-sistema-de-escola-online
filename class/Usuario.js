class Usuario {
  #nome
  #idade

  constructor(nome, idade) {
    this.#nome = nome
    this.#idade = idade
  }

  get nome() {
    return this.#nome
  }

  set nome(novoNome) {
    this.#nome = novoNome
  }

  get idade() {
    return this.#idade
  }

  set idade(novaIdade) {
    this.#idade = novaIdade
  }

  getNome() {
    return this.#nome
  }

  getIdade() {
    return this.#idade
  }

  acessoPainel() {
    return "Acesso ao sistema escolar"
  }

  toString() {
    return `nome: ${this.#nome}, idade: ${this.#idade}`
  }
}

module.exports = Usuario