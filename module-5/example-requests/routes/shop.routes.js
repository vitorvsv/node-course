const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../helpers/path.helpers');

router.get('/', (req, res, next) => {
    console.log('Root middlware!');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

module.exports = router;
