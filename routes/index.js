import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje
} from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";
const router = express.Router();
//Req -> es el request, es la peticion
//Res -> es la respuesta

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:viaje",paginaDetalleViaje);


router.get("/testimoniales", paginaTestimoniales);

router.post("/testimoniales", guardarTestimonial);

export default router;
