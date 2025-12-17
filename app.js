import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, resp)=>{
    resp.send("ciao")
})

app.listen(port, () => {

    console.log(`server in funzione sulla porta ${port}`)
})