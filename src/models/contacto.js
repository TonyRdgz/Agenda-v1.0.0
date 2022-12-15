const { Schema, model } = require('mongoose');

//Status>
//1: Activo
//2: Eliminado

const contactoSchema = new Schema({
    nombre: {type: String},
    telefono: {type: String, deafult: '0'},
    correo: { type: String },
    status: {type: Number, default:1 }
});

module.exports = model('agenda_contactos',contactoSchema);



