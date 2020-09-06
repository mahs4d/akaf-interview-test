/* eslint-disable global-require */
const Awilix = require('awilix');

function fillContainer(container) {
    container.register({
        carServices: Awilix.asClass(require('./services/CarServices')).singleton(),
    });
}

module.exports = fillContainer;
