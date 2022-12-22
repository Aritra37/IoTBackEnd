import { NextFunction } from "express";
import { Request,Response } from "express";
import APIError from "../error/APIError";
import {prisma} from "../app";

const CreateUser=async(req:Request,res:Response,next:NextFunction)=>{
    
    const userData=req.body;
    try{
        await prisma.user.create({
            data:userData,
        });
        res.status(201).json({
            message:"User Created Successfully",
            user:userData
        })
    }catch(error){
        next(APIError.internalServerError())
    }
};

const getUser=async(req:Request,res:Response,next:NextFunction)=>{
    const userId=Number(req.params.id);
    try{
        const user=await prisma.user.findUnique({
            where:{
            id: userId
            }
        })
        res.status(200).json({
            message:"User Found",
            user:user
        })
    }catch(error){
        next(APIError.badRequest("User Not Found"))
    }
    
};
export {CreateUser};