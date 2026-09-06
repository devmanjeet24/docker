import express from "express";
import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 8000

const app = express();


app.get("/", (req, res) => {
    return res.status(200).json({message: "hello from docker phase 2"});
})

app.listen(PORT, ()=> {
    console.log("server started");
})