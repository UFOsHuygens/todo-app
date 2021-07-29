const tarefaInput = document.querySelector("#tarefa-input");
const tarefaForm = document.querySelector("#tarefa-form");
const concluirTarefa = document.querySelector("#concluir-btn");
const tarefas = document.querySelector("#tarefas");

let contador = 0;

tarefaForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (tarefaInput.value.length >= 4) {
        addTarefa(false, `${tarefaInput.value}`);
        tarefaInput.classList.remove("is-invalid");
        tarefaInput.value = "";
    } else {
        tarefaInput.classList.add("is-invalid");
        const feedback = tarefaInput.parentNode.querySelector(".invalid-feedback");
        feedback.innerText = "Digite 4 caracteres ou mais para cada tarefa";
    }
});

function addTarefa(status, tarefaDigitada) {
    contador++;

    const checkedString = status ? 'checked' : '';

    const tarefaTexto = `
    <li class="list-group-item" id="tarefa-li-${contador}">
        <div class="form-check d-flex justify-content-between align-items-center">
            <input type="checkbox" id="tarefa-${contador}" class="form-check-input">
            <label for="tarefa-${contador}" class="form-check-label d-block">
                ${tarefaDigitada}
            </label>
            <button class="btn btn-danger" onclick="deletar(this)">DELETAR</button>
        </div>
    </li>
    `;
    tarefas.innerHTML += tarefaTexto;
}

concluirTarefa.onclick = () => {
    const checks = document.querySelectorAll("#tarefas input:checked");
    checks.forEach(elemento => {
        elemento.parentNode.parentNode.remove()
    })
}

function deletar(elemento) {
    elemento.parentNode.parentNode.remove();
}