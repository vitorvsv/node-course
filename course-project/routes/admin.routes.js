const express = require('express');
const routes = express.Router();

// Controllers
const productsController = require('../controllers/products.controller');

routes.get('/add-product', productsController.getAddProduct);
routes.post('/add-product', productsController.postAddProduct);

module.exports = routes;
