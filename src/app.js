import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

//eventos de conexao
conexao.on("error",(erro) => {
    console.log("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feito com sucesso")
})

const app = express();
routes(app);

export default app;
