/* eslint-disable global-require */
const Awilix = require('awilix');

function fillContainer(container) {
    container.register({
        database: Awilix.asClass(require('./Database')).singleton(),
        carRepository: Awilix.asClass(require('./repositories/CarRepository')).singleton(),
    });
}

module.exports = fillContainer;
