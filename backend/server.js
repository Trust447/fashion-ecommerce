import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';

//App Configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary();


//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);


//Api Endpoints
app.get("/", (req,res)=>{
    res.send('Hello e-commerce API')
})


app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})