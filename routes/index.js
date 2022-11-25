import express from 'express';

import { paginaInicio, paginaNosotros, paginaViajes,paginaDetalleViaje, paginaTestimoniales } from '../controller/paginasController.js';

import { guardarTestimonial } from '../controller/testimonialController.js';

const router = express.Router();

//req - request o lo que enviamos
//res - respuesta o lo que express nos responde
router.get('/', paginaInicio);

router.get('/nosotros',paginaNosotros);

router.get('/viajes',paginaViajes);
router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial);

//Exportas las rutas a la página principal
export default router;
