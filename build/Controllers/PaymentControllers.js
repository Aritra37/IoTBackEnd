"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePayment = exports.UpdatePayment = exports.GetAllPayment = exports.GetPayment = exports.CreatePayment = void 0;
const APIError_1 = __importDefault(require("../error/APIError"));
const app_1 = require("../app");
const CreatePayment = async (req, res, next) => {
    const PaymentData = req.body;
    try {
        await app_1.prisma.payment.create({
            data: PaymentData,
        });
        res.status(200).json({
            message: "Payment Done Successfully",
            paymentInfo: PaymentData,
        });
    }
    catch (error) {
        next(APIError_1.default.internalServerError("Payment Failed"));
    }
};
exports.CreatePayment = CreatePayment;
const GetPayment = async (req, res, next) => {
    const PaymentId = Number(req.params.id);
    try {
        const PaymentData = await app_1.prisma.payment.findUnique({
            where: {
                id: PaymentId,
            }
        });
        res.status(200).json({
            message: "Payment Found Successfully",
            paymentData: PaymentData,
        });
    }
    catch (error) {
        next(APIError_1.default.internalServerError("Payment Record Not Found"));
    }
};
exports.GetPayment = GetPayment;
const GetAllPayment = async (req, res, next) => {
    const PaymentId = Number(req.params.id);
    try {
        const PaymentData = await app_1.prisma.payment.findMany();
        res.status(200).json({
            message: "Payment Found Successfully",
            paymentData: PaymentData,
        });
    }
    catch (error) {
        next(APIError_1.default.internalServerError("Payment Record Not Found"));
    }
};
exports.GetAllPayment = GetAllPayment;
const UpdatePayment = async (req, res, next) => {
    const PaymentId = Number(req.params.id);
    const UpdatedPayment = req.body;
    try {
        await app_1.prisma.payment.update({
            where: {
                id: PaymentId
            },
            data: UpdatedPayment,
        });
        res.status(200).json({
            message: "Payment Updated Successfully",
            PaymentInfo: UpdatedPayment
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("Sorry Payment Not Updated"));
    }
};
exports.UpdatePayment = UpdatePayment;
const DeletePayment = async (req, res, next) => {
    const PaymentId = Number(req.params.id);
    try {
        await app_1.prisma.payment.delete({
            where: {
                id: PaymentId
            },
        });
        res.status(200).json({
            message: "Payment Deleted Successfully",
            InfoDeleted: PaymentId
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("Payment Record Not Found. Can't be deleted"));
    }
};
exports.DeletePayment = DeletePayment;
