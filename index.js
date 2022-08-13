import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//conectar a la bd
db.authenticate()
    .then( ()=> console.log('Base de datos conectada'))
    .catch( error => console.log(error) )
const port = process.env.port || 4000;

app.set('view engine','pug');

app.use(express.static('public'));

app.use('/', router); 

app.listen(port ,() =>{
    console.log(`el servidor esta corriendo en el puerto ${port}`);
});
