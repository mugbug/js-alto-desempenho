const ARRAY_CURSO = [
  {curso: "Eng. Computação", id: 1},
  {curso: "Eng. Automação", id: 2},
  {curso: "Eng. Telecom", id: 3},
  {curso: "Eng. Biomédica", id: 4},
];

function adicionaElemento() {
  let __doc = document;
  let combobox = __doc.createElement('select');
  combobox.id = "cxbCurso";
  combobox.name = "cxbCurso";
  combobox.className = "input input-group";
  combobox.onchange = () => {
    let textbox = document.createElement("text");
    textbox.id = "txbUm";
    textbox.type = "text";
    textbox.className = "form-control";
    __doc.children[0].children[1].children[0].appendChild(textbox);
  };
  ARRAY_CURSO.forEach((obj) => {
    let opcao = __doc.createElement('option');
    opcao.value = obj.id;
    opcao.innerHTML = obj.curso;
    combobox.appendChild(opcao);
  });
  __doc.children[0].children[1].children[0].appendChild(combobox);
}
