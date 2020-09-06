/* eslint-disable global-require */
const Awilix = require('awilix');

function fillContainer(container) {
    container.register({
        config: Awilix.asClass(require('./Config')).singleton(),
        logger: Awilix.asClass(require('./Logger')).singleton(),
    });
}

module.exports = fillContainer;
