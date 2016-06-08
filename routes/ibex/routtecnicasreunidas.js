var express = require('express');
var router = express.Router();
var request = require ('request');


router.get('/', function(req, res, next) {
  res.render('./home/ibex/tecnicasreunidas', { 
  	title: 'tecnicasreunidas',
    
  });
});

module.exports = router;
