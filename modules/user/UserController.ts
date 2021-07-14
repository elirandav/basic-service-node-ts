import * as service from './UserService'
import {Request, Response} from "express";

export const getUsers = async (req: Request, res: Response) => {
    const result = await service.getUsers()
    res.status(200).json(result)
}

export const createUser = async (req: Request, res: Response) => {
    await service.createUser(req.body)
    res.status(200).json('ok')
}

