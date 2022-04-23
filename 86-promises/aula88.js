function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;

    return Math.floor( Math.random() * (max - min) + min);
}


function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Erro')
                return;
            }

            resolve (msg.toUpperCase() + ' - Passei na Promise')
            return;
        }, tempo)
    });
}

/*
// forma complicada extensa, sem async e await
esperaAi('Fase 1', rand(0, 3)) 
    .then( valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then (fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase)
    })
    .then(fase => {
        console.log('Termianmos na fase: ', fase);
    })
    .catch(e => console.log(e));
*/

// Utilizando async e await, async permite que utilizar await que aguarda uma promisse ser executada

async function executa() {
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase: ', fase3);
}

executa();