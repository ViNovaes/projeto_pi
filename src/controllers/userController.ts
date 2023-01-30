import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';

export const login = (req:Request, res:Response) => {
    res.render('pages/login')
}

export const contaUsuario = (req:Request, res:Response) =>{
    res.render('pages/criarContaUsuario')
}

