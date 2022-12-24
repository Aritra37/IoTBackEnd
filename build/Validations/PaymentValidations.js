"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("../error/APIError"));
const PaymentFormValidations = (req, res, next) => {
    const paymentData = req.body;
    const { value } = paymentData;
    if (value != 500) {
        next(APIError_1.default.badRequest('Payment Should Exactly Be Rs.500'));
        return;
    }
    next();
};
exports.default = PaymentFormValidations;
