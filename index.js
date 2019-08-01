//jshint esversion: 6

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('This is a Weather App!')
})

app.listen(3000, function () {
  console.log('Weather app listening on port 3000!')
})