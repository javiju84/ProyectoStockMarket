var express = require('express');
var router = express.Router();
var request = require ('request');


router.get('/', function(req, res, next) {
  res.render('./home/ibex/bancopopular', { 
  	title: 'bancopopular',
    
  });
});

module.exports = router;
