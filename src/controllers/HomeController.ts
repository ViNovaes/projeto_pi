import { Request, Response } from 'express';
import { Funcionario } from '../models/Funcionario';
import { Loja } from '../models/Loja';
import { Ong } from '../models/Ong';
import { Usuario } from '../models/Usuario';

import {sequelize } from '../instances/mysql'

export const home = async (req:Request, res:Response) => {
    /*try{
        await sequelize.authenticate()
        console.log("Conexão estabilizada com sucesso!")
    } catch(error){
        console.log("Deu problema: ",error)
    }
    */
    
    res.render('pages/home')
}