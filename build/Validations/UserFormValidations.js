"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("../error/APIError"));
const UserFormValidation = (req, res, next) => {
    const userData = req.body;
    const { Age } = userData;
    // age limit
    if (Age < 18 || Age > 65) {
        next(APIError_1.default.badRequest('Age limit is between 18 - 65'));
        return;
    }
    next();
};
exports.default = UserFormValidation;
