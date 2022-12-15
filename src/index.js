const express = require("express");
const app = express();
const bodyParser = require ("body-parser");
const { Schema, model } = require("mongoose"); //Módulo para usar MongoDB
const mongoose = require ('mongoose')
const path = require("path");
const notebooks = require("./models/notebooks.js");
let port = process.env.PORT || 3000; //Conectarnos al puerto 3000
console.log("Servidor funcionando en puerto " + port); //Log para saber que el servidor está funcionando

app.listen(port); //Escuchar al puerto
app.set("views", path.join(__dirname, "views")); //Carpeta donde están todas las vistas html/ejs
app.engine("html", require("ejs").renderFile); //Renderizar html como ejs
app.set("view engine", "ejs"); //Permitir el uso de ejs
app.use(require("./routes/"));
app.use(bodyParser.urlencoded({ extended: false }));
//Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));


//DataBase
const user = "gonzalo"
const pass = "gonzalo123"
const dbName = "Proyecto"

const uri = `mongodb+srv://gonzalo:gonzalo123@cluster0.kmzwssz.mongodb.net/Proyecto?retryWrites=true&w=majority`;
 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Conectado a MongoDB Cloud')) 
  .catch(e => console.log('error de conexión', e))

//base de datos

app.post("/addnotebook", function (req, res) {
    console.log(req.body)
    let nuevaNotebook = new notebooks({
    nombre: req.body.notebook,
});
nuevaNotebook.save();
res.redirect("/registro");
});

//prestamos
const prestamos = require("./models/prestamos.js")




app.post("/tomarprestado", async function (req, res) {

    await notebooks.findOneAndUpdate({nombre: req.body.notebook}, {  //Editar campos del perfil
      prestado: true
    })

    let nuevoPrestamo = new prestamos({
        nombre: req.body.nombre,
        curso: req.body.curso,
        notebook: req.body.notebook
    })
    nuevoPrestamo.save();
    //aGREGAR A LA BASE EL PRESTAMO
    
 res.redirect('/')

  
})





