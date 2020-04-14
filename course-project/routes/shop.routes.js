const express = require('express');

const router = express.Router();

// Controllers
const productsController = require('../controllers/products.controller');
const errorsController = require('../controllers/errors.controller');

// Routes
router.get('/', productsController.getProducts);
router.use(errorsController.handle404);

module.exports = router;
