import express from 'express';
import { PrismaClient } from '@prisma/client';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors'
const app=express();

const PORT=3000;

export const prisma=new PrismaClient();

//compresses all the responses
app.use(compression());

//makes the headers security
app.use(helmet());
//cross origin resource sharing (helps in cross policy resource sharing)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(PORT,()=>{
    console.log(`Yoga Server running on port ${PORT}`);
})


