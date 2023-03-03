import { Request, Response } from "express";
export const pingController = (req: Request, res: Response) =>{
    res.status(200).json({
        pong: true
    });
}