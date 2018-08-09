require('./config/config');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
let server = http.createServer(app);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Public path
app.use(express.static(path.resolve(__dirname,  '../public')));


// HBS
require('./hbs/helpers');
hbs.registerPartials(path.resolve(__dirname, '../views/partials'));
app.set('view engine', 'hbs');


// Configuracion de sockets, comunicación con el backend
module.exports.io = socketIO(server);
require('./sockets/socket');


// Rutas URL
app.use(require('./routes/index'));


// Conexión con BD
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Conectado a base de datos');
});


// Servidor en línea
server.listen(process.env.PORT, () => console.log('Escuchando en el puerto', process.env.PORT));