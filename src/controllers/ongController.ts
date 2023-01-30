import { Request, Response } from 'express';
import { Ong } from '../models/Ong';

export const contaOngs = (req:Request, res:Response) =>{
    res.render('pages/criarContaOng')
}