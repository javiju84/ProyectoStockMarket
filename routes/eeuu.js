var express = require('express');
var router = express.Router();
var request = require ('request');

router.get('/',function(req,res){
  console.log(req.session.user_id);
  res.render('./home/eeuu', { 
  	title: 'eeuu',
    
  });
});

module.exports = router;
