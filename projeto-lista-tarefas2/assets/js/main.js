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

const inputTarefas = document.querySelector('.input-tarefas');
const btnTarefas = document.querySelector('.btn-tarefas');
const tarefas = document.querySelector('.tarefas');



function criarTarefa(text){

    const li = criarLi();
    li.innerHTML = text;
    tarefas.appendChild(li);
    criarBotaoApagar(li);
    limparInput();
    salvarTarefas();

}

function criarLi(){
    return document.createElement('li');
}

function limparInput() {
    inputTarefas.value = '';
    inputTarefas.focus();

}

function criarBotaoApagar(li) {
    li.innerHTML += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerHTML = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

function salvarTarefas(){
    const liTarefas = document.querySelectorAll('li');
    const listaTarefas = [];
    
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefaJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefaJson);
}

function adicionarTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}



btnTarefas.addEventListener('click', function(e) {
    if(!inputTarefas.value) return;
    criarTarefa(inputTarefas.value);
})


inputTarefas.addEventListener('keypress', function(e) {
    if(e.keyCode === 13){
        if(!inputTarefas.value) return;
        criarTarefa(inputTarefas.value);
    }
})


document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

adicionarTarefasSalvas()