import { Testimonial } from "../models/Testimonial.js";
const guardarTestimonial = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  const errores = [];
  //Validar campos
  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje esta vacio" });
  }

  if (errores.length > 0) {
    //Consultar testimoniales existentes
    const testimoniales = await Testimonial.findAll();
    //Mostrar la vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      mensaje,
      nombre,
      correo,
      testimoniales,
    });
  } else {
    try {
      //Almacenar en la base de datos
      const nuevoTestimonial = await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
