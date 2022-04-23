/*
function verificaDiv(num) {

    if (num % 3 == 0 && num % 5 == 0){
        return 'FizzBuzz';
    } else if (num % 3 == 0) {
        return 'Fizz';
    } else if (num % 5 == 0) {
        return 'Buzz';
    }else  returnnum;
}

function verificaNum (num) {
    return num === parseInt(num);
}


for (let i = 0; i <= 100; i++) {
    
    if( verificaNum(i)) {
        console.log(`${i} ${verificaDiv(i)}`)
    }
}



*/

function fizzBuzz (numero) {
    if (numero !== parseInt(numero)) return 'NaN';
    if (numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz';
    if (numero % 5 == 0) return 'Fizz';
    if (numero % 3 == 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(`${i} ${fizzBuzz(i)}`)
}