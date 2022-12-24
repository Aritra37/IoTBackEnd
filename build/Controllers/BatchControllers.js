"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBatch = exports.incrementBatch = exports.updateBatch = exports.getAllBatch = exports.getBatch = exports.CreateBatch = void 0;
const APIError_1 = __importDefault(require("../error/APIError"));
const app_1 = require("../app");
const CreateBatch = async (req, res, next) => {
    const BatchData = req.body;
    try {
        await app_1.prisma.batch.create({
            data: BatchData,
        });
        res.status(201).json({
            message: "Batch Created Successfully",
            user: BatchData,
        });
    }
    catch (error) {
        next(APIError_1.default.internalServerError("Batch Not Created"));
    }
};
exports.CreateBatch = CreateBatch;
const getBatch = async (req, res, next) => {
    const batchId = Number(req.params.id);
    try {
        const batch = await app_1.prisma.user.findUnique({
            where: {
                id: batchId
            }
        });
        res.status(200).json({
            message: "Batch Found",
            user: batch
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("Batch Not Found"));
    }
};
exports.getBatch = getBatch;
const getAllBatch = async (req, res, next) => {
    try {
        const batches = await app_1.prisma.batch.findMany();
        res.status(200).json({
            batches
        });
    }
    catch (error) {
        console.log(error);
        next(APIError_1.default.badRequest("Batch not found"));
    }
};
exports.getAllBatch = getAllBatch;
const updateBatch = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const updatedBatchData = req.body;
        const user = await app_1.prisma.batch.update({
            where: {
                id: id,
            },
            data: updatedBatchData,
        });
        res.status(200).json({
            message: "Batch Updated Successfully",
            user: user
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("Batch Not Found"));
    }
};
exports.updateBatch = updateBatch;
const incrementBatch = async (req, res, next) => {
    const batchId = Number(req.params.id);
    try {
        const found = await app_1.prisma.batch.findUnique({
            where: {
                id: batchId
            }
        });
        if ((found === null || found === void 0 ? void 0 : found.batch_capacity_current) == (found === null || found === void 0 ? void 0 : found.batch_capacity_max)) {
            next(APIError_1.default.badRequest("Batch Filled Already"));
        }
        else {
            const batchupdate = await app_1.prisma.batch.update({
                where: {
                    id: batchId
                },
                data: { batch_capacity_current: { increment: 1 } },
            });
        }
    }
    catch (error) {
        next(APIError_1.default.badRequest("Batch Not Found"));
    }
};
exports.incrementBatch = incrementBatch;
const deleteBatch = async (req, res, next) => {
    const batchId = Number(req.params.id);
    try {
        const batch = await app_1.prisma.batch.delete({
            where: {
                id: batchId
            }
        });
        res.status(200).json({
            message: "Batch Deleted Successfully ",
            batch: batch
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("Batch Not Found!"));
    }
};
exports.deleteBatch = deleteBatch;
// export const decrementBatch=async(req:Request,res:Response,next:NextFunction)=>{
//     const batchId=Number(req.params.id);
//     try{
//         const found=await prisma.batch.findUnique({
//             where:{
//             id: batchId
//             }
//         })
//     }
//     catch(error){
//         next(APIError.badRequest("Batch Not Found"))
//     }
// };
