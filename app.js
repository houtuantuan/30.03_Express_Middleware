const express = require('express');
const app = express();

const {secure}=require("./middlewares/secureMiddleware")

app.use(secure);

app.get('/', secure,(req, res) => res.send('Hello World!'))

// const {secure}= require("./middlewares/secureMiddleware")

module.exports = app;