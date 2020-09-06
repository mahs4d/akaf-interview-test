/* eslint-disable global-require */
const Express = require('express');
const Morgan = require('morgan');
const BodyParser = require('body-parser');
const Cors = require('cors');
const Helmet = require('helmet');
const Compression = require('compression');
const { cradleInjector, notFoundHandler, errorHandler } = require('./base/middlewares');

class Api {
    constructor(cradle) {
        this._cradle = cradle;
        this._config = cradle.config;
        this._logger = cradle.logger;
    }

    async setup() {
        this.app = Express();

        this.app.use(BodyParser.json());
        this.app.use(Morgan('dev'));
        this.app.use(Cors());
        this.app.use(Helmet());
        this.app.use(Compression());

        // pre
        this.app.use(cradleInjector(this._cradle));

        // routers
        this.app.use(require('./car/router'));

        // post
        this.app.use(notFoundHandler());

        // error handler
        this.app.use(errorHandler(this._config, this._logger));
    }

    start() {
        const host = this._config.get('api.host');
        const port = this._config.get('api.port');

        this._logger.info(`starting api @ ${host}:${port}`);
        this.app.listen(port, host);
    }
}

module.exports = Api;
