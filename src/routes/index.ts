import { Router } from 'express'
import {Request, Response} from 'express'
import * as homeController from '../controllers/HomeController'
import * as userController from '../controllers/userController';

const router = Router()

router.get('/',homeController.home)

router.get('/login',userController.login)

router.get('/criar-conta-usuario',userController.contaUsuario)



export default router