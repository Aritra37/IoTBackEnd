"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const userroutes_1 = __importDefault(require("./routes/userroutes"));
const batchroutes_1 = __importDefault(require("./routes/batchroutes"));
const paymentroutes_1 = __importDefault(require("./routes/paymentroutes"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const ErrorHandler_1 = __importDefault(require("./error/ErrorHandler"));
const app = (0, express_1.default)();
const PORT = 3000;
exports.prisma = new client_1.PrismaClient();
//compresses all the responses
app.use((0, compression_1.default)());
//makes the headers security
app.use((0, helmet_1.default)());
//cross origin resource sharing (helps in cross policy resource sharing)
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("API of YOGA FORM!");
});
// user route 
app.use("/user", userroutes_1.default);
app.use("/batch", batchroutes_1.default);
app.use("/payment", paymentroutes_1.default);
app.use(ErrorHandler_1.default);
app.listen(PORT, () => {
    console.log(`Yoga Server running on port ${PORT}`);
});
exports.default = app;
