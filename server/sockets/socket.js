const {io} = require('../server');


io.on('connection', (client) => {

    console.log('Cliente se ha conectado');

    client.on('disconnect', () => {

    });
    // client.on('eventoPersonalizado', (data, callback) => {
    //     console.log(data);
    //     callback(data);
    // });
});