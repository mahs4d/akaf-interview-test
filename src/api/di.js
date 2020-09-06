/* eslint-disable global-require */
const Awilix = require('awilix');

function fillContainer(container) {
    container.register({
        api: Awilix.asClass(require('./Api')).singleton(),
    });
}

module.exports = fillContainer;
