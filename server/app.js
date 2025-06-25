var express = require('express');
var bodyParser = require('body-parser')
var logger = require('morgan');
// var path = require('path');
var cors = require('cors')
var ViteExpress = require("vite-express");
var app = express();
var routes = require('./routes')
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use('/', routes.index)

app.ViteExpress = ViteExpress
module.exports = app;
