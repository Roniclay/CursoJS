const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um titulo de testes',
    descricao: 'Uma descrição de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));


exports.paginaInical = (req, res, next) => {
    res.render('index');
    next();
}

exports.trataPost = (req, res) => {
    res.send('Sua nova rota de post');
}