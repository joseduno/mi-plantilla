const express = require('express');
const app = express();


app.get('/', (req, res) => {
    // TODO

    res.render('home', {
        title: 'My first APP!',
        saludo: 'Hola Mundo!',
        mensaje: 'Bienvenido a mi plantilla'
    });
});


module.exports = app;