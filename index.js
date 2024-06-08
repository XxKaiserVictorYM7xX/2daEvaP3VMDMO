module.exports = require('./lib/express');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('./index.html')
})