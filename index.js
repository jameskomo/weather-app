//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = 'f507ecbf581f365564b7328f409f689a';
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  res.render('index');
})


app.post('/', function (req, res) {
    res.render('index');
    console.log(req.body.city);
  })
  

app.listen(3000, function () {
  console.log('Weather app listening on port 3000!')
})