const StatusCodes = require('http-status-codes');

async function createCar(req, res) {
    const { carServices } = res.locals.cradle;

    const car = await carServices.createCar({
        code: req.body.code,
        carNumber: req.body.carNumber,
        brand: req.body.brand,
        model: req.body.model,
        productionYear: req.body.productionYear,
        color: req.body.color,
        serviceTypes: req.body.serviceTypes,
        seatsCount: req.body.seatsCount,
        luggageCapacity: req.body.luggageCapacity,
        status: req.body.status,
    });

    res.status(StatusCodes.CREATED).json({ car });
}

async function listCars(req, res) {
    const { carServices } = res.locals.cradle;

    const { page } = req.query;
    const cars = await carServices.listAllCars(page);

    res.status(StatusCodes.OK).json({ cars });
}

async function getCarById(req, res) {
    const { carServices } = res.locals.cradle;

    const { id } = req.params;
    const car = await carServices.getCarById(id);

    res.status(StatusCodes.OK).json({ car });
}

async function updateCarById(req, res) {
    const { carServices } = res.locals.cradle;

    const { id } = req.params;
    await carServices.updateCarById(id, {
        code: req.body.code,
        carNumber: req.body.carNumber,
        brand: req.body.brand,
        model: req.body.model,
        productionYear: req.body.productionYear,
        color: req.body.color,
        serviceTypes: req.body.serviceTypes,
        seatsCount: req.body.seatsCount,
        luggageCapacity: req.body.luggageCapacity,
        status: req.body.status,
    });

    res.status(StatusCodes.NO_CONTENT).json({});
}

async function removeCarById(req, res) {
    const { carServices } = res.locals.cradle;

    const { id } = req.params;
    await carServices.removeCarById(id);

    res.status(StatusCodes.NO_CONTENT).json({});
}

module.exports = {
    createCar,
    listCars,
    getCarById,
    updateCarById,
    removeCarById,
};
