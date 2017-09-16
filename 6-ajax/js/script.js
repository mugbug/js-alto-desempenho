var httpRequest;

if(window.XMLHttpRequest) {
  httpRequest = new XMLHttpRequest();
} else {
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
const URL = "http://inatel.oobox.com.br/alunos";
var estadoDaMinhaRequisicao = () => {
  if (httpRequest.readyState == 4) {
    console.log("status de requisição terminada");
    if (httpRequest.status == 200) {
      alert(httpRequest.responseText);
    }
  } else if (httpRequest.readyState == 3) {
    console.log("status de interatividade");
  } else if (httpRequest.readyState == 2) {
    console.log("status de carregamento");
  } else if (httpRequest.readyState == 1) {
    console.log("status de inicio de carregamento");
  } else {
    console.log("deu ruinzão tiu");
  }
}

var aluno = {
  'name': 'Pedro Zaroni',
  'age': 21,
  'course': 'Eng. Computação',
  'period': 8
};

httpRequest.onreadystatechange = estadoDaMinhaRequisicao;
// httpRequest.setRequestHeader('Content-Type', 'application/json');
httpRequest.open("POST", URL, true);
httpRequest.send(JSON.stringify(aluno));
