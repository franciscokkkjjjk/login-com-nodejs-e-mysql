import { Request, Response } from "express";
import { Usuarios } from "../models/Usuarios";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const TodosUsuariosController = async (req: Request, res: Response) => {
    const usuarios = await Usuarios.findAll();
    res.json({
        ListadeTodosUsuarios: usuarios
    });
}

export const cadastrarUsuarioController = async (req: Request, res: Response) => {
    if (req.body.email && req.body.senha) {
        const { email, senha }: { email: string, senha: string } = req.body;
        const verificaUsuarioBanco = await Usuarios.findOne({ where: { email } });
        if (verificaUsuarioBanco === null) {
            const userNovo = await Usuarios.create({ email, senha });
            await userNovo.save();
            const token = JWT.sign({
                id: userNovo.id,
                email: userNovo.email
            },
                process.env.SECRET_KEY_JTW as string,
                {
                    expiresIn: "4h"
                }
            )
            res.json({
                UsuarioCadastrado: userNovo,
                token
            });
        } else {
            res.json({
                error: "Esse email já está cadastrado."
            });
        }
    } else {
        res.json({
            error: "Campo(s) Obrigatório(s) faltando."
        })
    }
}

export const LoginController = async (req: Request, res: Response) => {
    if (req.body.email && req.body.senha) {
        const { email, senha }: { email: string, senha: string } = req.body;
        const usuario = await Usuarios.findOne({
            where: { email }
        });
        if (usuario === null) {
            res.json({
                Auth: false,
                error: "Usuário não encontrado."
            });
            return;
        }
        if (usuario.senha === senha) {
            const token = JWT.sign(
                {
                    id: usuario.id,
                    email: usuario.email
                },
                process.env.SECRET_KEY_JTW as string,
                {
                    expiresIn: "4h"
                }
            );
            res.json({
                Auth: true,
                token
            })
        }
    } else {
        res.json({
            Auth: false,
            error: "Campo(s) Obrigatório(s) faltando."
        })
    }
}