var Aluno = function (nome, periodo, matricula, nota) {
  this.nome = String();
  this.periodo = Number();
  this.curso = String();
  this.matricula = Number();
  this.nota = Number();

  if(nome.length > 20){
    this.nome = String();
    alert('Valor invalido de nome.');
  }
  else {
    this.nome = nome;
    alert('Nome atribuido com sucesso!');
  }

  // (periodo >= 1 && periodo <= 10) ? this.periodo = periodo : false;
  if(periodo >= 1 && periodo <= 10){
    this.periodo = periodo;
  } else {
    this.periodo = Number();
    alert("Período inválido!");
  }

  if(matricula < 0 || matricula > 50000){
    this.matricula = Number();
    alert('Valor invalido de matricula.');
  } else {
    this.matricula = matricula;
  }

  if(nota < 0 || nota > 100){
    this.nota = Number();
    alert('Valor invalido de nota.');
  } else {
    this.nota = nota;
  }

  this.addPeriodo = () => {
    if(this.periodo <= 10){
      this.periodo++;
    } else {
      alert("Já está no máximo período!");
    }
  }

  this.alteraCurso = (ref) => {
    var _default = "Eng. Computação";
    switch (ref) {
      case 1:
        this.curso = "Eng. Telecom";
        break;
      case 2:
        this.curso = "Eng. Biomédica";
        break;
      case 3:
        this.curso = "Eng. Automação";
        break;
      default:
        this.curso = _default;
    }
  }

  this.alteraNota = (valor) => {
    if (valor >= 0 && valor <= 100){
      return "A nota foi alterada para " + valor;
    }
  }
}

var Disciplina = function (nome, professor) {
  this.nome = String();
  this.mediaClasse = Number();
  this.professor = String();
  this.alunosMatriculados = new Array();
  this.maxAlunos = Number();

  if(nome.length > 20){
    this.nome = String();
    alert('Valor invalido de nome.');
  } else {
    this.nome = nome;
    alert('Nome atribuido com sucesso!');
  }

  this.calculaMedia = () => {
    var soma = Number();
    var qntAlunos = this.alunosMatriculados.length;
    for (i=0; i<qntAlunos; i++){
      soma = soma + this.alunosMatriculados[i].nota;
    }
    media = soma/qntAlunos;
    if(media < 0 || media > 100){
      alert('Valor invalido de Media Classe!');
      this.mediaClasse = Number();
    } else {
      this.mediaClasse = media;
    }
  }

  this.adicionaAluno = (aluno) => {
    if(this.maxAlunos < 10){
      this.alunosMatriculados.push(aluno);
      this.maxAlunos++;
    } else {
      alert('Maximo de alunos alcançado!');
    }
  }
}

var Curso = function (nome){
  this.nome = nome;
  this.disciplinas = new Array();

  this.adicionaDisciplina = (disciplina) => {
    this.disciplinas.push(disciplina);
  }
}

Curso.prototype.exibeDisciplinas = (curso) => {
  var aux = String();
  for(let i=0;i<disciplinas.length;i++){
    aux = aux + disciplinas[i] + ', ';
  }
  alert('As disciplinas do ' + curso.nome + ' são ' + aux);
};
