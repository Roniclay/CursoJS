function relogio () {
    function criarHoraSegundo(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT',
            hour12: false
        })
    }
    
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criarHoraSegundo(segundos);
        }, 1000)
    }
    
    
    document.addEventListener('click', function (e) {
        const el = e.target;
        console.log(el)
    
        if (el.classList.contains('iniciar')) {
            console.log('Clicou')
            relogio.classList.remove('pausado')
            iniciarRelogio()
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
    
        }
        if (el.classList.contains('zerar')) {
    
            relogio.classList.remove('pausado');
            clearInterval(timer)
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })
}

relogio();