import UserModel from "../models/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRETE);
}

//Login user

export const loginUser =async (req, res) => {
         
 try {
    
      const {email, password} = req.body;

      //check if user exist
      const user = await UserModel.findone({email});

      if(!user){
        return res.json({success: false, msg:"user does not exist"})
      }

    //check if the password provided matches the user saved pasword in the database
      const isMatch = await bcrypt.compare(password, user.password)

      //if it matches generate token
      if(isMatch){
        const token = createToken(user._id)
        res.json({success: true, token})
      }else{
        res.json({success: false, msg: "invalid password"})
      }

 } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message})
 }



    } 
        

//Register user

export const registerUser =async (req, res) => {
   
     try {
        const {name, email, password} = req.body

        //checking if user already exist
        const isUser = await UserModel.findOne({email});
        if (isUser) {
            return res.json({success : false, msg : "user already exist"})
        }

        //validating email format & strong password
        if (!validator.isEmail(email)){
            return res.json({success : false, msg : "invalid email"})
        }

        if (password.length < 8){
            return res.json({success : false, msg : "strong password needed"})
        };

        //hash user password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //create the user
        const newUser = new UserModel({
            name,
            email,
            password : hashPassword
        });

        //save the new user in the database
        const user = await newUser.save();

        const token = createToken(user._id)

        res.json({success : true, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}


//Admin user

export const adminLogin=async (req, res) => {
   
}