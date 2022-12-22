"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
function errorHandler(err, req, res, next) {
    if (err instanceof APIError_1.default) {
        res.status(err.code).message({ message: err.message });
        return;
    }
    res.status(500).json({
        message: "Something went wrong with the server"
    });
}
exports.default = errorHandler;
