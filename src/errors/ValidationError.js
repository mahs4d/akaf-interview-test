const AppError = require('./AppError');
const ErrorsList = require('./ErrorsList');

class ValidationError extends AppError {
    constructor(error) {
        super({
            statusCode: ErrorsList.CORE_VALIDATION_ERROR.statusCode,
            code: ErrorsList.CORE_VALIDATION_ERROR.code,
            message: error.details[0].message,
            userMessage: ErrorsList.CORE_VALIDATION_ERROR.userMessage,
        });
    }
}

module.exports = ValidationError;
