import {Router} from 'express'
import { createTourController, deleteTourController, findTourController, getAllToursController, updateTourController } from '../controllers/tour_controller.js'


const router = Router()

//* Publica
router.get('/tours',getAllToursController)

//* Publica
router.get('/tours/:id',findTourController)

//* Privada Admin - Empleado
router.post('/tours',createTourController)

//* Privada Admin - Empleado//* Privada Admin - Empleado
router.put('/tours/:id',updateTourController)

//* Privada Admin - Empleado
router.delete('/tours/:id',deleteTourController)

export default router