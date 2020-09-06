class AppError extends Error {
    constructor({ statusCode, code, message, userMessage }) {
        super(message);

        this.statusCode = statusCode;
        this.code = code;
        this.message = message;
        this.userMessage = userMessage;
    }
}

module.exports = AppError;
