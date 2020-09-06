function asyncHandler(fn) {
    // eslint-disable-next-line func-names
    return async function (req, res, next) {
        try {
            await fn(req, res, next);
        } catch (err) {
            next(err);
        }
    };
}

module.exports = {
    asyncHandler,
};
