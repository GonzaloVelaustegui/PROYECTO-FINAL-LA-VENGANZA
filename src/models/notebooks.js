const mongoose = require('mongoose');
//const { default: mongoose } = require('mongoose');

const notebooksSchema = new mongoose.Schema({
    nombre: {
        type:  String,
        required: true
    },
    prestado: {
        type:  Boolean,
        default: false
    }

})

const notebooks = mongoose.model('notebooks', notebooksSchema)


module.exports = notebooks;