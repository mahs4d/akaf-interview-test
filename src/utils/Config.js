/* eslint-disable class-methods-use-this */
const NodeConfig = require('config');

class Config {
    get(setting) {
        return NodeConfig.get(setting);
    }
}

module.exports = Config;
