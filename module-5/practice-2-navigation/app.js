const express = require('express');
const path = require('path');

const app = express();

// Public folder
// *Need be imported before routes declarations
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join('public')));

const globalRoutes = require('./routes/global.routes');

app.use(globalRoutes.routes);

app.listen(3000);
