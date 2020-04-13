const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Import Routes
const adminRoutes = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.listen(3000);
