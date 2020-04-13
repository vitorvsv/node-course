const express = require('express');
const path = require('path');

const routes = express.Router();

const rootDir = require('../helpers/path.helpers');

routes.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

routes.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = routes;
