//* Rquerir modulos
import express from 'express'
import router from './routers/tours_routes.js'

//* INICIALIZACIONES
const app = express()

//* Variables
app.set('port', process.env.PORT || 3000)

//* MIDDLEWARE
app.use(express.json())

//* RUTAS

app.get('/',(req,res) =>{
    res.send('OK')
})
//* Rutas prara El Tour
app.use('/api',router)

//* Rutas para El User

//* Rutas para el Booking

//* Exportar instancia de la app
export default app