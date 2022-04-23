/*
// O intuito é chamar funções em tempos mas sem call back, ou seja 
// quando temos uma função e precisamos chamar outra mas é necessário seguir uma ordem
// o promises entra para facilitar isso

// Mostrando um teste de qual seria a problemática

function rand(min,max) {
    min *= 1000;
    max += 1000;

    return Math.floor(Math.random() * (max - min) + min) 
}

// utilizando call back cb
function esperaAi(msg, tempo, cb){
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

// Abaixo temos o seguinte, a frase vai em ordem pq temos uma árvore de natal, o promises simplifica isso 
esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1,3), function () {
        esperaAi('Frase 3', rand(1,3))
    })
});
*/

// Com promises

function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    // Resolve -> Executou com sucesso resolve para mim
    // Reject -> Deu algum erro, esquece ele
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

//Sempre que chamar resolve esse método then será executado
//Sempre que chamar reject esse método catch será exeutado

// Promises são paralelas

esperaAi('Frase 1', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1,3));
    })
    .catch();

    //Promises.all - resolve todas a promises de um array
    //Promises.race - entrega a primeira resolvida.
