class Car {
    constructor({
        id,
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
        this.id = id;
        this.code = code;
        this.carNumber = carNumber;
        this.brand = brand;
        this.model = model;
        this.productionYear = productionYear;
        this.color = color;
        this.serviceTypes = serviceTypes;
        this.seatsCount = seatsCount;
        this.luggageCapacity = luggageCapacity;
        this.status = status;
    }
}

module.exports = Car;
