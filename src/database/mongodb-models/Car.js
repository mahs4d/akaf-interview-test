const Mongoose = require('mongoose');
const Car = require('../../core/models/Car');

const schema = new Mongoose.Schema(
    {
        code: {
            type: Mongoose.Schema.Types.String,
            required: true,
        },

        carNumber: {
            type: Mongoose.Schema.Types.String,
            required: true,
        },

        brand: {
            type: Mongoose.Schema.Types.String,
            required: true,
        },

        model: {
            type: Mongoose.Schema.Types.String,
            required: true,
        },

        productionYear: {
            type: Mongoose.Schema.Types.Number,
            required: true,
        },

        color: {
            type: Mongoose.Schema.Types.String,
            required: true,
        },

        ServiceTypes: {
            type: [Mongoose.Schema.Types.String],
            required: false,
        },

        seatsCount: {
            type: Mongoose.Schema.Types.Number,
            required: true,
        },

        luggageCapacity: {
            type: Mongoose.Schema.Types.Number,
            required: true,
        },

        status: {
            type: Mongoose.Schema.Types.String,
            enum: ['active', 'deactive'],
            required: true,
        },
    },
    {
        id: false,
        collection: 'car',
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    }
);

// eslint-disable-next-line func-names
schema.statics.toObject = function (dbModel) {
    if (dbModel === null || dbModel === undefined) {
        return null;
    }

    if (Array.isArray(dbModel)) {
        const ret = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const singledbModel of dbModel) {
            ret.push(this.toObject(singledbModel));
        }

        return ret;
    }

    return new Car({
        id: dbModel._id,
        code: dbModel.code,
        carNumber: dbModel.carNumber,
        brand: dbModel.brand,
        model: dbModel.model,
        productionYear: dbModel.productionYear,
        color: dbModel.color,
        serviceTypes: dbModel.serviceTypes,
        seatsCount: dbModel.seatsCount,
        luggageCapacity: dbModel.luggageCapacity,
        status: dbModel.status,
    });
};

module.exports = Mongoose.model('Car', schema);
