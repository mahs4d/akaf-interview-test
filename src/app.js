const Container = require('./container');

async function main() {
    const api = Container.resolve('api');
    await api.setup();

    const database = Container.resolve('database');
    await database.setup();

    api.start();
}

main().then();
