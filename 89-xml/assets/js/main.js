// Jeito complexo

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }
        })
    })

};


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'Get',
        url: href
    };

    const response = await request(objConfig);
    carregaResultado(response);
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}



// fecth api

fetch('pagina2.html')
    .then(resposta => {
        if (resposta.status !== 200 ) throw new Error ('Erro 404 nosso');
        return resposta.text();
    })
    .then (html => console.log(html))
    .catch(e => console.log(e));