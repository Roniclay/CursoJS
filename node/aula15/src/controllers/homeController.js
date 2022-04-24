const HomeModel = require('../models/HomeModel');

exports.paginaInical = (req, res, next) => {
    console.log(req.flash('error'), req.flash('info'), req.flash('sucess'))
    res.render('index');
    next();
}

exports.trataPost = (req, res) => {
    res.send('Sua nova rota de post');
}