import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
//Configuracion de express
const app = express();

//Conectar a la base de datos
db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

//Definir puerto
const port = process.env.PORT || 3000;

//Habilitar PUG
app.set("view engine", "pug");

//Creamos Middleware para obtener año actual
app.use((req, res, next) => {
  //Se agrega la variable a las variables locales en express para que puedan ser accesibles en las vistas
  const year = new Date().getFullYear();
  res.locals.actualYear = year;
  res.locals.nombreSitio = "Agencia de Viajes";
  //Pasamos al siguiente middleware
  next();
});

//Agregar body parser para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

//Definir la carpeta publica para recursos visuales
app.use(express.static("public"));

//Agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
