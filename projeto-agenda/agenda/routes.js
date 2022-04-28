const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController')

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);

//Criando registro
route.post('/login/register', loginController.register);

//Fazendo login
route.post('/login/login', loginController.login);

//Logout
route.get('/login/logout',loginController.logout)






module.exports = route;
