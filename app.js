var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require ("cookie-session");
var bodyParser = require('body-parser');


//routes

var routabertis = require('./routes/ibex/routabertis');
var routacciona = require('./routes/ibex/routacciona');
var routacerinox = require('./routes/ibex/routacerinox');
var routacs = require('./routes/ibex/routacs');
var routaena = require('./routes/ibex/routaena');
var routamadeus = require('./routes/ibex/routamadeus');
var routarcelormittal = require('./routes/ibex/routarcelormittal');
var routbancopopular = require('./routes/ibex/routbancopopular');
var routbancosabadell = require('./routes/ibex/routbancosabadell');
var routbankia = require('./routes/ibex/routbankia');
var routbankinter = require('./routes/ibex/routbankinter');
var routbbva = require('./routes/ibex/routbbva');
var routcaixabank = require('./routes/ibex/routcaixabank');
var routdia = require('./routes/ibex/routdia');
var routenagas = require('./routes/ibex/routenagas');
var routendesa = require('./routes/ibex/routendesa');
var routfcc = require('./routes/ibex/routfcc');
var routferrovial = require('./routes/ibex/routferrovial');
var routgamesa = require('./routes/ibex/routgamesa');
var routgasnatural = require('./routes/ibex/routgasnatural');
var routgrifols = require('./routes/ibex/routgrifols');
var routiag = require('./routes/ibex/routiag');
var routiberdrola = require('./routes/ibex/routiberdrola');
var routinditex = require('./routes/ibex/routinditex');
var routindra = require('./routes/ibex/routindra');
var routmafre = require('./routes/ibex/routmafre');
var routmediaset = require('./routes/ibex/routmediaset');
var routmerlin = require('./routes/ibex/routmerlin');
var routohl = require('./routes/ibex/routohl');
var routredelectrica = require('./routes/ibex/routredelectrica');
var routrepsol = require('./routes/ibex/routrepsol');
var routsacyr = require('./routes/ibex/routsacyr');
var routtecnicasreunidas = require('./routes/ibex/routtecnicasreunidas');
var routsantander = require('./routes/ibex/routsantander');
var routtelefonica = require('./routes/ibex/routtelefonica');
var ibex = require('./routes/ibex');
var europa = require('./routes/europa');
var eeuu = require('./routes/eeuu');
var asia = require('./routes/asia');

var routes = require('./routes/index');
var users = require('./routes/users');

//BaseDatos
var User = require('./models/user').User;

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

//use
app.use('/', routes);
app.use('/users', users);
app.use('/home',session_middleware);
app.use('/home',routes);
app.use('/home/ibex',ibex);
app.use('/home/europa',europa);
app.use('/home/eeuu',eeuu);
app.use('/home/asia',asia);
app.use('/home/abertis',routabertis);
app.use('/home/acciona',routacciona);
app.use('/home/acerinox',routacerinox);
app.use('/home/acs',routacs);
app.use('/home/aena',routaena);
app.use('/home/amadeus',routamadeus);
app.use('/home/arcelormittal',routarcelormittal);
app.use('/home/bancopopular',routbancopopular);
app.use('/home/bancosabadell',routbancosabadell);
app.use('/home/bankia',routbankia);
app.use('/home/bankinter',routbankinter);
app.use('/home/bbva',routbbva);
app.use('/home/caixabank',routcaixabank);
app.use('/home/dia',routdia);
app.use('/home/enagas',routenagas);
app.use('/home/endesa',routendesa);
app.use('/home/fcc',routfcc);
app.use('/home/ferrovial',routferrovial);
app.use('/home/gamesa',routgamesa);
app.use('/home/gasnatural',routgasnatural);
app.use('/home/grifols',routgrifols);
app.use('/home/iag',routiag);
app.use('/home/iberdrola',routiberdrola);
app.use('/home/inditex',routinditex);
app.use('/home/indra',routindra);
app.use('/home/mafre',routmafre);
app.use('/home/mediaset',routmediaset);
app.use('/home/merlin',routmerlin);
app.use('/home/ohl',routohl);
app.use('/home/redelectrica',routredelectrica);
app.use('/home/repsol',routrepsol);
app.use('/home/sacyr',routsacyr);
app.use('/home/santander',routsantander);
app.use('/home/tecnicasreunidas',routtecnicasreunidas);
app.use('/home/telefonica',routtelefonica);

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
