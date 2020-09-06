const Awilix = require('awilix');
const ApiDI = require('./api/di');
const DatabaseDI = require('./database/di');
const CoreDI = require('./core/di');
const UtilsDI = require('./utils/di');

function getContainer() {
    const container = Awilix.createContainer({
        injectionMode: Awilix.InjectionMode.PROXY,
    });

    ApiDI(container);
    DatabaseDI(container);
    CoreDI(container);
    UtilsDI(container);

    return container;
}

module.exports = getContainer();
