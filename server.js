//import http from "http";
import "dotenv/config"
import app from "./src/app.js";


const PORT = 3000;

app.listen(PORT,() => { /**3000 é o numero da porta */
    console.log("servidor escutando!");
})