const paragrafos = document.querySelector('.paragrafos');
const teste = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of teste) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white'
}