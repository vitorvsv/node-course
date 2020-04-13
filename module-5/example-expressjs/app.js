const express = require('express');

const app = express();

//Middlware
app.use('/', (req, res, next) => {
    console.log('Root middlware!');
    res.send("<h1>Root middlware!</h1>");
});

app.use('/data', (req, res, next) => {
    console.log('Data middlware!');
    res.send("<h1>Data middlware!</h1>");
});

//Middlware
// app.use((req, res, next) => {
//     console.log('I\'m in the middleware');
//     next(); // Allows go to the next middlware
// });

app.listen(3000);
