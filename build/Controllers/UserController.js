"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getAllUser = exports.getUser = exports.createUser = void 0;
const APIError_1 = __importDefault(require("../error/APIError"));
const app_1 = require("../app");
const createUser = async (req, res, next) => {
    const userData = req.body;
    try {
        await app_1.prisma.user.create({
            data: userData,
        });
        res.status(201).json({
            message: "User created Successfully",
            user: userData,
        });
    }
    catch (error) {
        console.log(error);
        next(APIError_1.default.internalServerError("Something went Wrong"));
    }
};
exports.createUser = createUser;
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
exports.getUser = getUser;
const getAllUser = async (req, res, next) => {
    try {
        const users = await app_1.prisma.user.findMany();
        res.status(200).json({
            users
        });
    }
    catch (error) {
        console.log(error);
        next(APIError_1.default.badRequest("Users not found"));
    }
};
exports.getAllUser = getAllUser;
const updateUser = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const updatedUserData = req.body;
        const user = await app_1.prisma.user.update({
            where: {
                id: id,
            },
            data: updatedUserData,
        });
        res.status(200).json({
            message: "Updated Successfully",
            user: user
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("User Not Found!"));
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res, next) => {
    const userId = Number(req.params.id);
    try {
        const user = await app_1.prisma.user.delete({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "User Deleted Successfully ",
            user: user
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("User Not Found!"));
    }
};
exports.deleteUser = deleteUser;
