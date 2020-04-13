const express = require('express');
const path = require('path');

const routes = express.Router();

const rootDir = require('../helpers/path.helpers');

const products = [];

routes.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        productCSS: true,
        formsCSS: true,
        activeAddProduct: true
    });
});

routes.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    console.log(req.body);
    res.redirect('/');
});

module.exports.routes = routes;
module.exports.products = products;
