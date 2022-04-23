const nome = "Roni";
const sobrenome = "Rodrigues";

const falaNome = () => {
    console.log(nome, sobrenome);
};


module.exports.name = nome;
exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

