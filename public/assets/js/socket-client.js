let socket = io();


// Extraer data de la URL
// let params = new URLSearchParams(window.location.search);


socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// socket.emit('eventoPersonalizado', data, function(resp) {
//     console.log(resp); // información enviada desde el servidor
// });