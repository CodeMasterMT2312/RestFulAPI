import {Router} from 'express'
import { getAllToursController } from '../controllers/tour_controller.js'


const router = Router()

router.get('/tours',getAllToursController)

export default router