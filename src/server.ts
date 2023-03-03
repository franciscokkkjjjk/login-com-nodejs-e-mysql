import express from "express";
import dotenv from "dotenv";
import rotasPrincipais from "./routes/rotasPrincipais";
import cors from "cors";
dotenv.config();

const server = express();

server.use(cors({
    origin: "*"
}));

server.use(express.urlencoded({ extended: true }));


server.use(rotasPrincipais);

server.listen(parseInt(process.env.PORT_SERVER as string) | 4000);
