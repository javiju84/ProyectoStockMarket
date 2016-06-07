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

router.get('/europa',function(req,res){
  console.log(req.session.user_id);
  res.render('./home/europa')
});
router.get('/eeuu',function(req,res){
  console.log(req.session.user_id);
  res.render('./home/eeuu')
});
router.get('/asia',function(req,res){
  console.log(req.session.user_id);
  res.render('./home/asia')
});
router.get('/divisas',function(req,res){
  console.log(req.session.user_id);
  res.render('./home/divisas')
});
router.get('/ibex',function(req,res){
  console.log(req.session.user_id);
  res.render('./home/ibex')
});


//ibex35
router.get('/abertis',function(req,res){
  res.render('./home/ibex/abertis')
});

router.get('/acciona',function(req,res){
  res.render('./home/ibex/acciona')
});

router.get('/acerinox',function(req,res){
  res.render('./home/ibex/acerinox')
});

router.get('/acs',function(req,res){
  res.render('./home/ibex/acs')
});

router.get('/aena',function(req,res){
  res.render('./home/ibex/aena')
});

router.get('/amadeus',function(req,res){
  res.render('./home/ibex/amadeus')
});

router.get('/arcelormittal',function(req,res){
  res.render('./home/ibex/arcelormittal')
});

router.get('/bancopopular',function(req,res){
  res.render('./home/ibex/bancopopular')
});

router.get('/bancosabadell',function(req,res){
  res.render('./home/ibex/bancosabadell')
});

router.get('/bankia',function(req,res){
  res.render('./home/ibex/bankia')
});

router.get('/bankinter',function(req,res){
  res.render('./home/ibex/bankinter')
});

router.get('/bbva',function(req,res){
  res.render('./home/ibex/bbva')
});

router.get('/caixabank',function(req,res){
  res.render('./home/ibex/caixabank')
});

router.get('/dia',function(req,res){
  res.render('./home/ibex/dia')
});

router.get('/enagas',function(req,res){
  res.render('./home/ibex/enagas')
});

router.get('/endesa',function(req,res){
  res.render('./home/ibex/endesa')
});

router.get('/fcc',function(req,res){
  res.render('./home/ibex/fcc')
});

router.get('/ferrovial',function(req,res){
  res.render('./home/ibex/ferrovial')
});

router.get('/gamesa',function(req,res){
  res.render('./home/ibex/gamesa')
});

router.get('/gasnatural',function(req,res){
  res.render('./home/ibex/gasnatural')
});

router.get('/grifols',function(req,res){
  res.render('./home/ibex/grifols')
});

router.get('/iag',function(req,res){
  res.render('./home/ibex/iag')
});

router.get('/iberdrola',function(req,res){
  res.render('./home/ibex/iberdrola')
});

router.get('/inditex',function(req,res){
  res.render('./home/ibex/inditex')
});

router.get('/indra',function(req,res){
  res.render('./home/ibex/indra')
});

router.get('/mafre',function(req,res){
  res.render('./home/ibex/mafre')
});

router.get('/mediaset',function(req,res){
  res.render('./home/ibex/mediaset')
});

router.get('/merlin',function(req,res){
  res.render('./home/ibex/merlin')
});

router.get('/ohl',function(req,res){
  res.render('./home/ibex/ohl')
});

router.get('/redelectrica',function(req,res){
  res.render('./home/ibex/redelectrica')
});

router.get('/repsol',function(req,res){
  res.render('./home/ibex/repsol')
});

router.get('/sacyr',function(req,res){
  res.render('./home/ibex/sacyr')
});

router.get('/santander',function(req,res){
  res.render('./home/ibex/santander')
});

router.get('/tecnicasreunidas',function(req,res){
  res.render('./home/ibex/tecnicasreunidas')
});

router.get('/telefonica',function(req,res){
  res.render('./home/ibex/telefonica')
});
module.exports = router;
