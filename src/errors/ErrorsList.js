const StatusCodes = require('http-status-codes');

module.exports = {
    // region core

    CORE_INTERNAL_SERVER_ERROR: {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        code: 'core:0001',
        message: 'internal server error',
        userMessage: 'خطای داخلی سرور',
    },

    CORE_NOT_FOUND: {
        statusCode: StatusCodes.NOT_FOUND,
        code: 'core:0002',
        message: 'not found',
        userMessage: 'درخواست یافت نشد',
    },

    CORE_VALIDATION_ERROR: {
        statusCode: StatusCodes.BAD_REQUEST,
        code: 'core:0003',
        message: 'invalid values',
        userMessage: 'مقادیر ورودی اشتباه است',
    },

    // endregion

    // region car

    CAR_NOT_FOUND: {
        statusCode: StatusCodes.NOT_FOUND,
        code: 'car:0001',
        message: 'car not found',
        userMessage: 'خودرو یافت نشد',
    },

    // endregion
};
