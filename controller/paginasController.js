import { Viaje } from "../models/Viaje.js";
import { Testimoniales } from "../models/Testimoniales.js";

const paginaInicio = async (req,res) => {
  //Consultar 3 viajes  y 3 testimoniales en DB
  const promiseDB = [];
  promiseDB.push(Viaje.findAll({limit:3}));
  promiseDB.push(Testimoniales.findAll({limit:3}));
  try {
    const resultado = await Promise.all(promiseDB);
  
    res.render('inicio',{
     pagina:'Inicio', clase:'home',viajes:resultado[0], testimoniales:resultado[1]
    });
  } catch (error) {
    console.log(error)
  }
}
 
const paginaNosotros = async (req,res) => res.render('nosotros',{pagina:'Nosotros'});

const paginaViajes = async (req,res) => {
  //Consultar base de datos
  const viajes = await Viaje.findAll();
  res.render('viajes',{
    //Pasando las variables a la vista
    pagina:'Próximos viajes',
    viajes
  })
};
//Mostrar viaje por slug
const paginaDetalleViaje = async (req,res) => {
 const { slug } =req.params;

 try{
  const viaje = await Viaje.findOne({where:{slug}});
  res.render('viaje', {
    pagina:'Información Viaje',
    viaje
  })

 }catch{
 }
}

const paginaTestimoniales = async (req,res) => {
  try {
    const testimoniales = await Testimoniales.findAll();
    res.render('testimoniales', {
    pagina:'Testimoniales',
    testimoniales
    
  })
  } catch (error) {
    console.log(error)
  }
};

export{
  paginaInicio,paginaNosotros,paginaViajes,paginaTestimoniales,paginaDetalleViaje
}