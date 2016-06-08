var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

/* GET home page. */
router.get('/index', function(req, res) {
	res.render('index');
});

//registrar datos
router.get("/register",function(req,res){
  User.find(function(err,doc){
    console.log(doc);
    res.render("register");
  });
});
router.get("/login",function(req,res){
  res.render("login");
});
router.get('/',function(req,res){
  console.log(req.session.user_id);
  res.render('./home/home')

});


//cerrar sesion y destruir cookie
/*
router.get('/logout',function(req,res){
 // req.session = null;
  //res.redirect('index')


});*/

router.get('/logout', function atLogout (req, res) {
   // res.clearCookie('session');
    res.redirect('login');
    console.log('sesion cerrada')
});



//enviar datos del registro a la base de datos
router.post("/users",function(req,res){
  var user = new User({   
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    password_confirmation: req.body.password_confirmation
  });
  if (user.password !== '')
    console.log('Se puede crear usuario');
  user.save(function(err){
    if(err){
      console.log(String(err));
    }
  if (user.password !== '')
    res.redirect("/home");
  else
    res.redirect("/home")
  });
});

//buscar usuario y enviar a la home
router.post("/sessions",function(req,res){
  User.findOne({username: req.body.username, password: req.body.password},function(err,user){
      req.session.user_id = user._id;
      res.redirect("/home");

    });
  });


module.exports = router;
