import Sequelize from 'sequelize';
import db from '../config/db.js';
//Creando el modelo para las tablas de SQL
export const Testimoniales = db.define('testimoniales', {
  nombre:{
    type: Sequelize.STRING
  },
  correo:{
    type: Sequelize.STRING
  },
  mensaje:{
    type: Sequelize.STRING
  }
})
