import express from 'express';
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

connectDB();


app.get("/", (req,res)=>{
    res.send('Hello e-commerce API')
})
app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})