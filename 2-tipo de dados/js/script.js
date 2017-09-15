debugger;
var aluno = {
  nome: "Pedro",
  periodo: "8",
  curso: "Engenharia de Computação",
  id: 1020
};

console.log("typeof aluno => " + typeof(aluno));
console.log("typeof aluno.nome => " + typeof(aluno.nome));
console.log("typeof aluno.periodo => " + typeof(aluno.periodo));
console.log("typeof aluno.id => " + typeof(aluno.id));

var alunos = new Array();
alunos.push(aluno);

console.log("typeof alunos => " + typeof(alunos));
