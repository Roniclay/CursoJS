const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    console.log();
    console.log('Passei no middleware')
    console.log();
    next();
}
//rotas da home
route.get('/', meuMiddleware,homeController.paginaInical, function(req,res,next) {
    console.log('Outro Middleware');
});
route.post('/', homeController.trataPost);

//rotas de contato

route.get('/contato', contatoController.contatoInicial)


module.exports = route;