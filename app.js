var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require ("cookie-session");
var bodyParser = require('body-parser');

var routabertis = require('./routes/ibex/routabertis');
var routes = require('./routes/index');
var users = require('./routes/users');
//BaseDatos
var User = require('./models/user').User
var app = express();
var session_middleware = require("./middlewares/session");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//cookies

app.use(cookieSession({
  name: "session",
  keys: ["llave-1","llave-2"]
}));

app.use('/', routes);
app.use('/users', users);
app.use('/home',session_middleware);
app.use('/home',routes);
app.use('/home/abertis',routabertis);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(7777);
console.log("localhost:7777")
module.exports = app;
