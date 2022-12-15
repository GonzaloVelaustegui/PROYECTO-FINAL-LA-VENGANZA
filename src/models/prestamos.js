const mongoose = require('mongoose');
//const { default: mongoose } = require('mongoose');

const prestamosSchema = new mongoose.Schema({
    nombre: {
        type:  String,
        required: true
    },
    curso: {
        type:  String,
        required: false
    },
    notebook: {
        type:  String,
        required: true
    }
})

const prestamos = mongoose.model('prestamos', prestamosSchema)


module.exports = prestamos;
