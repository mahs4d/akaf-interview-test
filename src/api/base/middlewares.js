const { AppError, ErrorsList } = require('../../errors');

function cradleInjector(cradle) {
    // eslint-disable-next-line func-names
    return function (req, res, next) {
        res.locals.cradle = cradle;
        next();
    };
}

function notFoundHandler() {
    // eslint-disable-next-line no-unused-vars, func-names
    return function (req, res, next) {
        throw new AppError(ErrorsList.CORE_NOT_FOUND);
    };
}

function errorHandler(config, logger) {
    const isDebugMode = config.get('debug');

    // eslint-disable-next-line func-names, no-unused-vars
    return function (err, req, res, next) {
        if (err instanceof AppError) {
            res.status(err.statusCode).json({
                code: err.code,
                message: err.message,
                userMessage: err.userMessage,
            });
        } else {
            const body = {
                code: ErrorsList.CORE_INTERNAL_SERVER_ERROR.code,
                message: ErrorsList.CORE_INTERNAL_SERVER_ERROR.message,
                userMessage: ErrorsList.CORE_INTERNAL_SERVER_ERROR.userMessage,
            };

            if (err instanceof Error) {
                if (isDebugMode) {
                    body.details = {
                        message: err.message,
                        stack: err.stack,
                    };
                }

                logger.error(err.message);
                logger.error(err.stack);
            } else {
                if (isDebugMode) {
                    body.details = {
                        message: err,
                    };
                }

                logger.error(err);
            }

            res.status(ErrorsList.CORE_INTERNAL_SERVER_ERROR.statusCode).json(body);
        }
    };
}

module.exports = {
    cradleInjector,
    notFoundHandler,
    errorHandler,
};
