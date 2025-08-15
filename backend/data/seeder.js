import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import connectDB from "../config/db"
import Product from "../models/product";

dotenv.config();

const insertData = async () =>{
    try{
        await connectDB();
        await Product.deleteMany();
        await Product.insertMany(process);
        console.log("products added successfully");
        process.exit(1);
    }catch (err){
        console.log(err);
        process.exit(1)
    }
}

insertData();