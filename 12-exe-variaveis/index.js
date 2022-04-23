let varA = 'A';
let varB = 'B';
let varC = 'C';

let varAux = '';

varAux = varA;
varA = varB;
varB = varC;
varC = varAux;

console.log(varA,varB, varC)
