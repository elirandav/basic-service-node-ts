var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/routes');
const expressApp = express();
// view engine setup
expressApp.set('views', path.join(__dirname, 'views'));
expressApp.set('view engine', 'jade');
expressApp.use(logger('dev'));
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: false }));
expressApp.use(cookieParser());
expressApp.use(express.static(path.join(__dirname, 'public')));
expressApp.use('', usersRouter);
expressApp.use(require('body-parser').json())

module.exports = expressApp;
