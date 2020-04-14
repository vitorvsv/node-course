const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const globalRoutes = require('./routes/global.routes.js');

//Configs
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use(globalRoutes);

// template engine configurations
app.set('views', 'views');
app.set('view engine', 'pug');

app.listen(3000);
