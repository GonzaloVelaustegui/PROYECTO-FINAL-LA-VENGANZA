const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();

const notebook = require ("../models/notebooks");
const prestamo = require('../models/prestamos')

//Index
router.get("/",  async (req, res) => {
  //Función find Mongoose - > 

  //notebook.find mongoose , busca de la base de datos 
  //function(err, notebooks) notebooks= [{nombre: hola},{nombre:chau}] notebooks 
 notebook.find({}, await function (err, notebooks /*<- donde se guarda notebook.find */) {
  res.render("index.html", {
    title: "INICIO",
    notebooks: notebooks // notebooks -> HTML , 2notebooks <---
  });
})
});
//Registo
router.get("/registro", (req, res) => {

  notebook.find({},  function (err, notebooks /*<- donde se guarda notebook.find */) {

prestamo.find({},  function (err, prestamos /*<- donde se guarda notebook.find */) {

  res.render("registro.html", {
    title: "REGISTRO",
    prestamos: prestamos,
    notebooks: notebooks // notebooks -> HTML , 2notebooks <---
  });


});
});
});
module.exports = router;





