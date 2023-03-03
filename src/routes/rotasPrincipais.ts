import { Router, Request, Response } from "express";
import { pingController } from "../controllers/pingController";
import * as apiController from "../controllers/apiController";
import { Auth } from "../middleware/auth";

const rotasPrincipais = Router();

rotasPrincipais.get("/ping", pingController);

rotasPrincipais.get("/usuarios", Auth.private, apiController.TodosUsuariosController);

rotasPrincipais.post("/usuario/cadastrar", apiController.cadastrarUsuarioController);

rotasPrincipais.post("/login", apiController.LoginController);

rotasPrincipais.get("*", (req: Request, res: Response) => {
    res.status(404).json({
        error: "Página não encontrada."
    })
});

export default rotasPrincipais;