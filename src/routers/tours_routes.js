import {Router} from 'express'
import { createTourController, deleteTourController, findTourController, getAllToursController, updateTourController, updateTourControllerPatch } from '../controllers/tour_controller.js'
import { verifyToken } from '../middlewares/auth.js'


const router = Router()

//* Publica
router.get('/tours',getAllToursController)

//* Publica
router.get('/tours/:id',findTourController)

//* Privada Admin - Empleado
router.post('/tours',verifyToken,createTourController)

//* Privada Admin - Empleado//* Privada Admin - Empleado
router.put('/tours/:id' ,verifyToken,updateTourController)

//* Privada Admin - Empleado//* Privada Admin - Empleado
router.patch('/tours/:id',verifyToken,updateTourControllerPatch)

//* Privada Admin - Empleado
router.delete('/tours/:id' ,verifyToken,deleteTourController)

export default router