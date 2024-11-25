//* Rquerir modulos
import express from 'express';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';


import routerTour from './routers/tours_routes.js';
import routerUser from './routers/user_routes.js';


//* INICIALIZACIONES
const app = express()
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

//* Variables
app.set('port', process.env.PORT || 3000)

//* MIDDLEWARE
app.use(express.json())

//* RUTAS

app.get('/',(req,res) =>{
    res.send('OK')
})
//* Rutas prara El Tour
app.use('/api',routerTour)

//* Rutas para El User

app.use('/api',routerUser)

//* Rutas para el Booking



//* Exportar instancia de la app
export default app