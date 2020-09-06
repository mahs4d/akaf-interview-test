const CarValidator = require('../validators/CarValidator');
const { AppError: AppException, ErrorsList } = require('../../errors');

class CarServices {
    constructor({ config, carRepository }) {
        this._config = config;
        this._carRepository = carRepository;
    }

    async createCar({
        code,
        carNumber,
        brand,
        model,
        productionYear,
        color,
        serviceTypes,
        seatsCount,
        luggageCapacity,
        status,
    }) {
        const creationDescriptor = {
            code,
            carNumber,
            brand,
            model,
            productionYear,
            color,
            serviceTypes,
            seatsCount,
            luggageCapacity,
            status,
        };
        CarValidator.validateCarCreation(creationDescriptor);

        return this._carRepository.createCar(creationDescriptor);
    }

    async listAllCars(page = 1) {
        const limit = this._config.get('app.pagination.pageSize');
        const offset = (page - 1) * limit;
        return this._carRepository.listAllCars(offset, limit);
    }

    async getCarById(id) {
        const car = await this._carRepository.getCarById(id);
        if (!car) {
            throw new AppException(ErrorsList.CAR_NOT_FOUND);
        }

        return car;
    }

    async updateCarById(
        id,
        { code, carNumber, brand, model, productionYear, color, serviceTypes, seatsCount, luggageCapacity, status }
    ) {
        const updateDescriptor = {
            code,
            carNumber,
            brand,
            model,
            productionYear,
            color,
            serviceTypes,
            seatsCount,
            luggageCapacity,
            status,
        };
        CarValidator.validateCarUpdate(updateDescriptor);
        await this._carRepository.updateCarById(id, updateDescriptor);
    }

    async removeCarById(id) {
        await this._carRepository.removeCarById(id);
    }
}

module.exports = CarServices;
