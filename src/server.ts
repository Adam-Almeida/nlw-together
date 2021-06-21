import express, { response } from "express";

//@types/express Biblioteca de Tipos
const app = express();

/**
 * MÉTODOS HTTP
 * GET    -> Utilizado para buscar uma informação
 * POST   -> Utilizado pra criar/salvar uma informação
 * DELETE -> Remover uma informação
 * PUT    -> Atualizar uma informação
 * PATCH  -> Atualizar um dado especifico
 */

app.get("/test", (request, response)=>{
    return response.send("Hello Wolrd");
});

app.post("/test-post", (request, response)=>{
    return response.send("Hello World pelo método post");
});

//http://localhost:3000
app.listen(3000, ()=> {console.log("Server is Running");});