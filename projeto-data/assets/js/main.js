/*

function getDiaDaSemana(dia) {

    let diaSemanaTexto;

    switch (dia) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            return "";
    }
}
function getDiaDoMes(mes) {

    let diaMesTexto;

    switch (mes) {
        case 0:
            diaMesTexto = 'Janeiro';
            return diaMesTexto;
        
        case 1:
            diaMesTexto = 'Fevereiro';
            return diaMesTexto;
        
        case 2:
            diaMesTexto = 'Março';
            return diaMesTexto;
        
        case 3:
            diaMesTexto = 'Abril';
            return diaMesTexto;
        
        case 4:
            diaMesTexto = 'Maio';
            return diaMesTexto;
        
        case 5:
            diaMesTexto = 'Junho';
            return diaMesTexto;
        
        case 6:
            diaMesTexto = 'Julho';
            return diaMesTexto;
        
        case 7:
            diaMesTexto = 'Agosto';
            return diaMesTexto;
        
        case 8:
            diaMesTexto = 'Setembro';
            return diaMesTexto;
        
        case 9:
            diaMesTexto = 'Outubro';
            return diaMesTexto;
        
        case 10:
            diaMesTexto = 'Novembro';
            return diaMesTexto;
        
        
        case 11:
            diaMesTexto = 'Dezembro';
            return diaMesTexto;
        default:
            return '';
        
    }
}

function zeroAEsquerda (num) {
    return num >=10 ? num : `0${num}`;
}
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = `${getDiaDaSemana(data.getDay())}, ${data.getDate()}
${getDiaDoMes(data.getMonth())} ${data.getFullYear()} 
${zeroAEsquerda (data.getHours())}:${zeroAEsquerda (data.getMinutes())}`;
*/

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString("pt-BR",  { dateStyle: "medium", timeStyle: "medium" });