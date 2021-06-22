import express, { response } from "express";

//@types/express Biblioteca de Tipos
const app = express();

import "./database";


app.listen(3000, ()=> {console.log("Server is Running");});