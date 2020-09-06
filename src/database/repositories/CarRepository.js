/* eslint-disable class-methods-use-this */
const CarMongoModel = require('../mongodb-models/Car');

class CarRepository {
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
        const mModel = new CarMongoModel({
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
        });

        return CarMongoModel.toObject(await mModel.save());
    }

    async listAllCars(offset, limit) {
        const mModels = await CarMongoModel.find().skip(offset).limit(limit).exec();
        return CarMongoModel.toObject(mModels);
    }

    async getCarById(id) {
        const mModel = await CarMongoModel.findOne({ _id: id }).exec();
        return CarMongoModel.toObject(mModel);
    }

    async updateCarById(
        id,
        { code, carNumber, brand, model, productionYear, color, serviceTypes, seatsCount, luggageCapacity, status }
    ) {
        const setObject = {
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
        Object.keys(setObject).forEach((key) => (setObject[key] === undefined ? delete setObject[key] : {}));

        await CarMongoModel.updateOne({ _id: id }, { $set: setObject }, {}).exec();
    }

    async removeCarById(id) {
        await CarMongoModel.deleteOne({ _id: id }).exec();
    }
}

module.exports = CarRepository;
