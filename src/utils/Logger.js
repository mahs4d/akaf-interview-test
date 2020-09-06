const Winston = require('winston');
const WinstonTimestampColorize = require('winston-timestamp-colorize');

class Logger {
    constructor({ config }) {
        const loggerLevel = config.get('logger.level');

        let consoleLoggerFormat = null;

        if (config.get('logger.colorize')) {
            consoleLoggerFormat = Winston.format.combine(
                Winston.format.splat(),
                Winston.format.timestamp(),
                Winston.format.colorize(),
                WinstonTimestampColorize({ color: 'yellow' }),
                Winston.format.printf(({ level, message, timestamp }) => {
                    return `${timestamp} ${level}: ${message}`;
                })
            );
        } else {
            consoleLoggerFormat = Winston.format.combine(
                Winston.format.splat(),
                Winston.format.timestamp(),
                Winston.format.printf(({ level, message, timestamp }) => {
                    return `${timestamp} ${level}: ${message}`;
                })
            );
        }

        this.logger = Winston.createLogger({
            level: loggerLevel,
            format: consoleLoggerFormat,
            transports: [
                new Winston.transports.Console({
                    format: consoleLoggerFormat,
                }),
            ],
        });
    }

    silly(message, ...meta) {
        return this.logger.silly(message, ...meta);
    }

    debug(message, ...meta) {
        return this.logger.debug(message, ...meta);
    }

    verbose(message, ...meta) {
        return this.logger.verbose(message, ...meta);
    }

    http(message, ...meta) {
        return this.logger.http(message, ...meta);
    }

    info(message, ...meta) {
        return this.logger.info(message, ...meta);
    }

    warn(message, ...meta) {
        return this.logger.warn(message, ...meta);
    }

    error(message, ...meta) {
        return this.logger.error(message, ...meta);
    }
}

module.exports = Logger;
