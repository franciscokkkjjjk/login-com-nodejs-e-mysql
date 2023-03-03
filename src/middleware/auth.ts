import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import { Usuarios } from "../models/Usuarios";

dotenv.config();

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let usuarioAutorizado: boolean = false;

        if (req.headers.authorization) {
            const [tipoDeAutorizacao, token] = req.headers.authorization.split(" ");
            if (tipoDeAutorizacao === "Bearer") {
                console.log("TOKEN", token);
                try {
                    const tokenDecoded = JWT.verify(token,
                        process.env.SECRET_KEY_JTW as string
                    );

                    usuarioAutorizado = true;
                    
                } catch (err) {
                    console.log("ERRO", "Houve um erro com o JsonWebToken(JWT)");
                }
            }
        }

        if (usuarioAutorizado) {
            next();
        } else {
            res.status(403);
            res.json({
                error: "Não autorizado."
            });
        }
    }
}