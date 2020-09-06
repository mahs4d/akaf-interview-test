const Mongoose = require('mongoose');

class Database {
    constructor({ config, logger }) {
        this._config = config;
        this._logger = logger;
    }

    async setup() {
        const host = this._config.get('database.mongodb.host');
        const port = this._config.get('database.mongodb.port');
        const username = this._config.get('database.mongodb.username');
        const password = this._config.get('database.mongodb.password');
        const dbName = this._config.get('database.mongodb.dbName');
        const uri = `mongodb://${host}:${port}`;

        this._logger.info(`connecting to mongodb @ ${uri}`);

        await Mongoose.connect(uri, {
            user: username,
            pass: password,
            dbName,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    }
}

module.exports = Database;
