const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let valoresValidos = {
    values: [],
    message: '{VALUE] no es un valor válido'
};


const Schema = mongoose.Schema;


let esquemaModelo = new Schema({
    // Agregar tantos campos como sean necesario en tu modelo, tomando en cuenta sus caracteristicas
    campo1: {
        type: String, // Pueden ser: Boolean, Number, etc...
        required: [true, 'El campo1 es necesario'], // por defecto se establece en false,
        unique: true, // por defecto se establece en false,
        default: 'Valor_X', // Pueden ser: Boolean, Number, etc... e indica el valor por defecto del campo
        enum: valoresValidos // para obligar a tener un valor determinado en este campo
    },
});


esquemaModelo.plugin(uniqueValidator, {
    message: '{PATH} debe ser unico'
});


module.exports.Elemento = mongoose.model('Elemento', esquemaModelo);