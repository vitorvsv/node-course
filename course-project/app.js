const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


// Import Routes
const adminRoutes = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

const app = express();

//Registering new template render
// const handlebars = require('express-handlebars');
// app.engine('hbs', handlebars({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
// }));

//Config renders
// app.set('view engine', 'pug');
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.listen(3000);
