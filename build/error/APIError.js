"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIError {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    }
    static badRequest(message = "Bad Request") {
        return new APIError(message, 400);
    }
    static NotFound(message = "Not Found") {
        return new APIError(message, 404);
    }
    static Unauthorized(message = "Unauthorized") {
        return new APIError(message, 401);
    }
    static internalServerError(message = "Something Went Wrong") {
        return new APIError(message, 500);
    }
    static PaymentRequired(message = "Payment Not Yet Done!") {
        return new APIError(message, 402);
    }
    static RequestTimeout(message = "Request Timeout") {
        return new APIError(message, 408);
    }
    static NetworkAuthenticationRequired(message = "Network Error!") {
        return new APIError(message, 511);
    }
}
exports.default = APIError;
