const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')

const { loginRequired } = require('./src/middlewares/middleware')

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);

//Criando registro
route.post('/login/register', loginController.register);

//Fazendo login
route.post('/login/login', loginController.login);

//Logout
route.get('/login/logout',loginController.logout);

//Rotas de contato

route.get('/contato/index', loginRequired,contatoController.index);

// Criando contato

route.post('/contato/register', contatoController.register);

// Edição

route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);





module.exports = route;
