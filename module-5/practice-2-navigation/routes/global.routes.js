const express = require('express');
const path = require('path');

const routes = express.Router();

routes.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
});

routes.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

routes.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
});

module.exports = {
    "routes" : routes,
    // ... others exports
};
