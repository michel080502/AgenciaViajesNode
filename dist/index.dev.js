"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Configuracion de express
var app = (0, _express["default"])(); //Definir puerto

var port = process.env.PORT || 3000; //Habilitar PUG

app.set("view engine", "pug"); //Creamos Middleware para obtener año actual

app.use(function (req, res, next) {
  //Se agrega la variable a las variables locales en express para que puedan ser accesibles en las vistas
  var year = new Date().getFullYear();
  res.locals.actualYear = year;
  res.locals.nombreSitio = "Agencia de Viajes"; //Pasamos al siguiente middleware

  next();
}); //Definir la carpeta publica para recursos visuales

app.use(_express["default"]["static"]("public")); //Agregar router

app.use("/", _index["default"]);
app.listen(port, function () {
  console.log("Servidor corriendo en el puerto ".concat(port));
});