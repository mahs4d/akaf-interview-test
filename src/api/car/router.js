const Express = require('express');
const controllers = require('./controllers');
const { asyncHandler } = require('../base/helpers');

const router = Express.Router();

router.post('/cars', asyncHandler(controllers.createCar));
router.get('/cars', asyncHandler(controllers.listCars));
router.get('/cars/:id', asyncHandler(controllers.getCarById));
router.put('/cars/:id', asyncHandler(controllers.updateCarById));
router.delete('/cars/:id', asyncHandler(controllers.removeCarById));

module.exports = router;
