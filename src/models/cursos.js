const mongoose = require('mongoose');
//const { default: mongoose } = require('mongoose');

const cursosSchema = new mongoose.Schema({
    nombre: {
        type:  String,
        required: true
    }

})

const cursos = mongoose.model('cursos', cursosSchema)


module.exports = cursos;