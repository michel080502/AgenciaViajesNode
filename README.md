# Pagina Web Agencia de Viajes

Aplicación web desarrollada con **Node.js** y **Express**, que renderiza vistas dinámicas usando **Pug** y gestiona la base de datos mediante **Sequelize** como ORM.  
El proyecto implementa una arquitectura MVC y permite mostrar información de viajes, detalles individuales y gestión de testimoniales.


---
## 🌐 Live Demo

🔗 **Aplicación en producción:**  
https://agenciaviajesnode-iut6.onrender.com

> ⚠ Nota: El despliegue se encuentra alojado en **Render**, por lo que la primera carga puede tardar unos segundos si el servicio está en reposo.

---

## Scripts disponibles

En el directorio del proyecto puedes ejecutar:

### `npm run dev`
Inicia la aplicación en modo desarrollo.  
Normalmente en: `http://localhost:4000`

---

## Tecnologías utilizadas
- **Node.js**
- **Express**
- **Pug** (motor de plantillas)
- **Sequelize** (ORM)
- **MySQL**
- **Nodemon** (entorno de desarrollo)

---

## Estructura del proyecto

```
Agencia Viajes/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── paginasController.js
│ └── testimonialController.js
|
├── models/
│ ├── Viaje.js 
│ └── Testimonial.js 
│
├── routes/
│ └── index.js
│
├── views/
│ ├── layout.pug
│ ├── inicio.pug
│ ├── nosotros.pug
│ ├── viajes.pug
│ └── testimoniales.pug
│
├── public/
│ └── css / img / js # Archivos estáticos
│
├── index.js 
├── package.json 
└── .env.example
```