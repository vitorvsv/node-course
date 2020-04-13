const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../helpers/path.helpers');

const adminRoutes = require('./admin.routes');

router.get('/', (req, res, next) => {
    const products = adminRoutes.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

router.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: '404 Not Found'});
});

module.exports = router;
