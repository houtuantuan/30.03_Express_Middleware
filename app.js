const express = require('express');
const app = express();

const {secure}=require("./middlewares/secureMiddleware")

// app.use(secure);
console.log("ddd")

app.get('/verify/:token', secure,(req, res) => {
   
    res.send('Hello World!'+req.params.token)
})


module.exports = app;