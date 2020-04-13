const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Import Routes
const adminRoutes = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

const app = express();

//Config renders
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.listen(3000);
