import User from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// @desc  user registration 
// @route POST /api/users/register
// @access public

const  registerUser = async (req, res) =>{
   const  {name, email, password} = req.body;

   const userExist = await User.findOne(email);
   if (userExist) {
    return res.status(400).json({message : "user already exist"})
   }
   
   const hashedPassword = await bcrypt.hash(password, 10);

   const user = await User.create({
    name, 
    email,
    password : hashedPassword
   });

   res.status(201).json({
    _id : user._id,
    name : user.name,
    email : user.email,
    token : generateToken(user._id)
   })
}


//@desc login user
//@route POST /api/users/login
//@access public

const loginUser = async (req, res)=>{
    const {name, email, password} = req.body;

    const user = await User.findOne(email);
    if (!user){
        return res.status(400).json({message:"invalid user"})
    }

    const matchPassword = bcrypt.compare(password, user.password)

    if (!matchPassword){
        return res.status(400).json({message : "invalid user"})
    }

    res.status(201).json({
       _id: user._id,
       name: user.name,
       email: user.email,
       token: generateToken(user._id) 
    });
};

const generateToken = (id)=>{
    return jwt
}

