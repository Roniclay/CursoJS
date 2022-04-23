const express = require('express');
const app = express();

// CRUD - CREATE, READ, UPDATE, DELETE
//          POST   GET    PUT   DELETE


app.get('/', (req, res) => {
    res.send('Hello <b>World!</b>');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
})