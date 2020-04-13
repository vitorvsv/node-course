const express = require("express");

const app = express();

app.use("/users", (request, response, next) => {
    console.log("---Users ROUTE---");
    response.send("<h1>Users!</h1>");
});

app.use('/', (request, response, next) => {
    console.log("---ROOT ROUTE---");
    response.send("<h1>Ola mundo!</h1>");
});

app.listen(3000);
