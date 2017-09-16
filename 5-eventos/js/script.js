function alteraCorBtn(op) {
  if (op == 1){
    document.getElementById("btnTrocaTexto").classList.remove("btn-danger");
    document.getElementById("btnTrocaTexto").classList.add("btn-success");
  } else {
    document.getElementById("btnTrocaTexto").classList.remove("btn-success");
    document.getElementById("btnTrocaTexto").classList.add("btn-danger");
  }
}

function clona() {
  var valorTxbCor = document.getElementById("txbCor").value;
  document.getElementById("lblNome").innerHTML = valorTxbCor;
}

function exibeAlerta() {
  alert("I was clicked!");
}
