"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const APIError_1 = __importDefault(require("../error/APIError"));
const app_1 = require("../app");
const CreateUser = async (req, res, next) => {
    const userData = req.body;
    try {
        await app_1.prisma.user.create({
            data: userData,
        });
        res.status(201).json({
            message: "User Created Successfully",
            user: userData
        });
    }
    catch (error) {
        next(APIError_1.default.internalServerError());
    }
};
exports.CreateUser = CreateUser;
const getUser = async (req, res, next) => {
    const userId = Number(req.params.id);
    try {
        const user = await app_1.prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "User Found",
            user: user
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("User Not Found"));
    }
};
