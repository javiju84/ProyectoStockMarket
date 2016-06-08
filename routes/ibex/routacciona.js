var express = require('express');
var router = express.Router();
var request = require ('request');
//var ibex35_santander = require('../../models/santander').ibex35_santander;
//var mongoose = require('mongoose');
//var SAN_schema = mongoose.model('ibex35_santander');

router.get('/', function(req, res, next) {
  res.render('./home/ibex/acciona', { 
  	title: 'Acciona',
    
  });
});
/*
router.get('/', function(req, res, next) 
{
	SAN_schema.find(function( err, ibex35_santanders, count )
	{
		res.send(ibex35_santanders);
		console.log(res.ibex35_santanders)
  	});
});

router.get('/STOCKMARKET', function (req, res) {
	ibex35_santander.find(function(err, records){
		aData = records;
		res.send(aData);
		console.log(aData)
	});
});
*/
module.exports = router;
