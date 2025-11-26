import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import UserModel from "../models/userModel.js";


const verifyToken = async(req, res, next) => { 
    const token= req.cookies.token;
    if(!token){
        return res.status(401).json({message:"No token, authorization denied"});
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user= await UserModel.findById(decoded.id).select("-password");
        next();
    }catch (error) {
        return res.status(401).json({message:"Token is not valid"});
    }
};
export default verifyToken;