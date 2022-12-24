import { Payment } from "@prisma/client";
import { Request, Response, NextFunction } from "express"
import APIError from "../error/APIError";

const PaymentFormValidations=(req:Request,res:Response,next:NextFunction)=>{
    const paymentData:Payment=req.body

    const {value}=paymentData;
    if(value!=500)
    {
        next(APIError.badRequest('Payment Should Exactly Be Rs.500'));
        return;
    }
    next();
};

export default PaymentFormValidations;