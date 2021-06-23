import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";

//@types/express Biblioteca de Tipos
const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, ()=> {console.log("Server is Running");});