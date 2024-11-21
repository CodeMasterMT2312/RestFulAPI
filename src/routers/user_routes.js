import {Router} from 'express'
import { loginController, registerController } from '../controllers/user_controller.js'

const router = Router()


//* Publica
router.post('/users/register',registerController)
router.post('/users/login',loginController)


export default router