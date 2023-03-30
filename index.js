const express = require('express')
const app = require('./app')
const port = 4000
require("dotenv").config();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
