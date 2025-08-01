import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connected to mongoDB")
    } catch (err) {
        console.error("mongoDB connection error", err.message);
        process.exit(1);
        
    }
}

export default connectDB;