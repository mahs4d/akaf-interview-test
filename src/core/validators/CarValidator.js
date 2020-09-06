const Joi = require('joi');
const { ValidationError } = require('../../errors');

const carCreationSchema = Joi.object({
    code: Joi.string().required(),
    carNumber: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    productionYear: Joi.number().required(),
    color: Joi.string().required(),
    serviceTypes: Joi.array().items(Joi.string()).required(),
    seatsCount: Joi.number().integer().positive().required(),
    luggageCapacity: Joi.number().integer().positive().required(),
    status: Joi.string().valid('active', 'deactive').required(),
});

const carUpdateSchema = Joi.object({
    code: Joi.string().optional(),
    carNumber: Joi.string().optional(),
    brand: Joi.string().optional(),
    model: Joi.string().optional(),
    productionYear: Joi.number().optional(),
    color: Joi.string().optional(),
    serviceTypes: Joi.array().items(Joi.string()).optional(),
    seatsCount: Joi.number().integer().positive().optional(),
    luggageCapacity: Joi.number().integer().positive().optional(),
    status: Joi.string().valid('active', 'deactive').optional(),
});

class CarValidator {
    static validateCarCreation(creationDescriptor) {
        const { error } = carCreationSchema.validate(creationDescriptor, {});
        if (error) {
            throw new ValidationError(error);
        }
    }

    static validateCarUpdate(updateDescriptor) {
        const { error } = carUpdateSchema.validate(updateDescriptor, {});
        if (error) {
            throw new ValidationError(error);
        }
    }
}

module.exports = CarValidator;
