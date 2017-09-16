debugger;
var Aluno = function (nome, email, curso) {
  this.nome = nome;
  this.email = email;
  this.curso = curso;
}

var alunos = new Array();
// popula o vetor alunos
for (var i = 0; i < 100; i++) {
  // gera aluno fake usando o faker.js
  var _aluno = new Aluno(
    faker.name.findName(),
    faker.internet.email(),
    faker.name.jobArea()
  );
  // coloca no vetor alunos
  alunos.push(_aluno);
}
// insere no repositorio local: key + content
localStorage.setItem("__arr-Alunos", JSON.stringify(alunos));

var dadosDaStorage = localStorage.getItem('__arr-Alunos');
(typeof(dadosDaStorage) === 'string') ?
    dadosDaStorage = JSON.parse(dadosDaStorage) : false;

if (dadosDaStorage) {
  var myText = String();
  dadosDaStorage.forEach((aluno) => {
    var text = `Nome: ${aluno.nome}, Email: ${aluno.email}, Curso: ${aluno.curso}`;
    myText = myText.concat(text);
  });
  alert(myText);
}
