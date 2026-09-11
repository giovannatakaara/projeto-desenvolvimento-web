const input = document.getElementById("tarefas");
const botao = document.getElementById("adiciona");
const lista = document.getElementById("lista");



botao.addEventListener('click', function() {

    const texto = input.value;

    if (texto !== "") {
    const tarefanova = document.createElement("li")

    tarefanova.textContent = texto;

    lista.appendChild(tarefanova)

    input.value = "";
       }
    } 
)


lista.addEventListener('click', function(evento) {
    if (evento.target.tagName === "LI") {
        evento.target.remove();
        }
    }
)


