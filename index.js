import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();
//Conectar la base de datos
db.authenticate()
  .then(() => {
    console.log('Base de datos conectada')
  })
  .catch(error => console.log('Error al conectar a la base de datos', error))
//Definir puerto
const port = process.env.PORT || 4000;
//Habilitando PUG
app.set('view engine', 'pug');
//Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.ActualYear = year;
  res.locals.nombresitio = 'Agencia de viajes';
  
  next();
});

//Agregar body parser para leer datos de un formulario
app.use(express.urlencoded({extended:true}))
//Definir la carpeta pública
app.use(express.static('public'));
//Agregar el router
app.use('/', router);

app.listen(port, () => `El servidor está funcionando en el puerto ${port}`);
