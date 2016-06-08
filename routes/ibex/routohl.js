var express = require('express');
var router = express.Router();
var request = require ('request');


router.get('/', function(req, res, next) {
  res.render('./home/ibex/ohl', { 
  	title: 'ohl',
    
  });
});

module.exports = router;
