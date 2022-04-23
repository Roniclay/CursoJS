/*

1 - Criar template do html
2 - selecionar classes
3 - capturar eventos
4 - criar função
5 - tratar o enter
6 - limpar input
7 - Cuidando do apagar 
8 - Salvar tarefa
*/


const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//Crinado Li
function criaLi() {
    return document.createElement('li');
}

// Adicionando tarefas
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoPagar(li);
    salvarTarefa();
}

// Limpando input
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoPagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}

// Salvar tarefas
function salvarTarefa() {

    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// Salavando já no inicio
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}


// Cuidando do enter no input 
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);

    }
});

// Cuidando do botão no input
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    }
})

adicionaTarefasSalvas()