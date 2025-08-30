import mongoose from "mongoose";

const connectDB = async ()=>{
    try {

        mongoose.connection.on('connected', ()=> console.log("connected to MongoDB"));

        mongoose.connection.on('error', (err)=> console.error("Error connecting to MongoDB", err));

        await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`)
    } catch (error) {
        console.log("failed to connect to MongoDB", error);
        process.exit(1)
    }
}
export default connectDB;