var express = require('express');
var router = express.Router();
var request = require ('request');


var jsonString = null;
var urlAbertis = "https://www.quandl.com/api/v3/datasets/YAHOO/MC_ABE.json?api_key=HGoTu3E3A_Lsv6biw1kc";
var urlAcciona = "https://www.quandl.com/api/v3/datasets/YAHOO/MC_ANA.json?api_key=HGoTu3E3A_Lsv6biw1kc";

	request({
		url: urlAbertis,
		json: true	
	}, 
	function (error, response, body){

		if (!error && response.statusCode == 200){
		var parseo = body.dataset.data;
		//console.log(parseo)
		var jsonString=[];
		for(var i = 0 ; i < parseo.length; i++){
			var jsonDato={};
			
				jsonDato.fecha = String(parseo[i][0]);
				jsonDato.abierto = parseFloat(parseo[i][1]);
				jsonDato.alto = parseFloat(parseo[i][2]);
				jsonDato.bajo = parseFloat(parseo[i][3]);
				jsonDato.cierre = parseFloat(parseo[i][4]);
				jsonDato.volumen = parseFloat(parseo[i][5]);
				jsonDato.ajuste_cierre = parseFloat(parseo[i][6]);
				jsonString.push(jsonDato);
			}
			var jsonArrayValor = JSON.parse(JSON.stringify(jsonString));
			//
			var aDocs =  jsonArrayValor;
		
		}
	

	
var dato2 = [];
    for (var n = 0; n < jsonArrayValor.length; n++){
      dato2.push([
        jsonArrayValor[n]['fecha'],
        jsonArrayValor[n]['abierto'],
        jsonArrayValor[n]['alto'],
        jsonArrayValor[n]['bajo'],
        jsonArrayValor[n]['cierre'],
        jsonArrayValor[n]['volumen'],
        jsonArrayValor[n]['ajuste_cierre']
        ]);
      
    }
  
  var valores00 = ([dato2 [n=0]]);




router.get('/',function(req,res){
  console.log(req.session.user_id);
  res.render('./home/ibex', { 
  	title: 'ibex',
    valores00: valores00,
  });
});

});

module.exports = router;
