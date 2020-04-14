const express = require('express');

const routes = express.Router();
let users = [];

routes.get('/', (req, res, next) => {
    res.render('home');
});

routes.get('/users', (req, res, next) => {
    res.render('users', {users: users});
});

routes.post('/add-user', (req, res, next) => {
    users.push({name: req.body.name});
    console.log(req.body.name);
    res.redirect('/users');
});

module.exports = routes;
