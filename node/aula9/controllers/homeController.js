exports.paginaInical = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar formulario</button>
    </form>
    `
    );
} 

exports.trataPost = (req, res) => {
    res.send('Sua nova rota de post');
}