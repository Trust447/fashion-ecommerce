import express from 'express';
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes"

dotenv.config();
const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use("/api/products", productRoutes);


app.get("/", (req,res)=>{
    res.send('Hello e-commerce API')
})
app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})