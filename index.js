const Aluno = require("./class/Aluno")
const Professor = require("./class/Professor")
const Coordenador = require("./class/Coordenador")
const Disciplina = require("./class/Disciplina")
const Turma = require("./class/Turma")
const Nota = require("./class/Nota")

const aluno = new Aluno("Maria", 16)
const aluno2 = new Aluno("João", 1444)
const aluno3 = new Aluno("Thierry", 15)
const professor = new Professor("João", 35)
const coordenador = new Coordenador("Ana", 40)

console.log(aluno.acessoPainel())
console.log(professor.acessoPainel())
console.log(coordenador.acessoPainel())

const matematica = new Disciplina("Matemática", 80)
const turmaA = new Turma("1ºA")

turmaA.adicionarDisciplina(matematica)
turmaA.adicionarAluno(aluno)
turmaA.adicionarAluno(aluno2)

console.log(turmaA.disciplinas)
console.log(turmaA.alunos)

const nota1 = new Nota(8.5, matematica)
aluno.adicionarNota(nota1)

aluno3.adicionarNota(new Nota(9.0, matematica))

console.log(aluno.notas)