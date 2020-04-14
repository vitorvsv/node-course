// NodeJS Packages
const path = require('path');

// Third party packages
const express = require('express');
const bodyParser = require('body-parser');

// Import Routes
const adminRoutes = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

const app = express();

//Config template render
app.set('view engine', 'pug');
app.set('views', 'views');

//Config public files
app.use(express.static(path.join(__dirname, 'public')));

//Config the body parser to use post more simplified
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.listen(3000);
