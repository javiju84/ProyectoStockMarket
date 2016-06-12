var express = require('express');
var router = express.Router();
var request = require ('request');



//console.log(router)
router.get('/',function(req,res){
  res.render('./home/ibex', { 
  	title: 'ibex'
  });
});




module.exports = router;
