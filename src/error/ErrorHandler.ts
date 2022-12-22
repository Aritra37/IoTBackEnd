import APIError from "./APIError";
import { Response,Request } from "express";

function errorHandler(err:any,req:any,res:any,next:any)
{
    if(err instanceof APIError)
    {
        res.status(err.code).message({message: err.message});
        return;
    }
    res.status(500).json({
        message:"Something went wrong with the server"
    });
}
export default errorHandler;