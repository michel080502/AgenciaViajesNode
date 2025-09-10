import { Testimonial } from "../models/Testimonial.js";
import { Viaje } from "../models/Viaje.js";
const paginaInicio = async (req, res) => {
  try {
    //Consultar 3 viajes del modelo Viaje
    //const viajes = await Viaje.findAll({ limit: 3 });
    //Consultar testimoniales
    //const testimoniales = await Testimonial.findAll({ limit: 3 });
    //Consultar ambos en paralelo
    const [viajes, testimoniales] = await Promise.all([
      Viaje.findAll({ limit: 3 }),
      Testimonial.findAll({ limit: 3 }),
    ]);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes,
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", { pagina: "Nosotros" });
};

const paginaViajes = async (req, res) => {
  //Consultar BD
  const viajes = await Viaje.findAll();
  res.render("viajes", { pagina: "Viajes", viajes });
};

const paginaDetalleViaje = async (req, res) => {
  const { viaje } = req.params;
  try {
    const resultado = await Viaje.findOne({ where: { slug: viaje } });
    res.render("viaje", { pagina: "Informacion Viaje", resultado });
  } catch (error) {
    console.log(error);
  }
};
const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", { pagina: "Testimoniales", testimoniales });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
};
