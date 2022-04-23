const elementos = [
    { tag: 'p', texto: 'Texto1' },
    { tag: 'div', texto: 'Texto2' },
    { tag: 'section', texto: 'Texto3' },
    { tag: 'footer', texto: 'Texto4' },
]


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){

    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag)

    tagCriada.innerHTML = texto;

    div.appendChild(tagCriada);
}

container.appendChild(div);