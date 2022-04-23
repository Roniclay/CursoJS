exports.paginaInical = (req, res, next) => {
    res.render('index');
    next();
} 

exports.trataPost = (req, res) => {
    res.send('Sua nova rota de post');
}