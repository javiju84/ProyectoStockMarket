var express = require('express');
var router = express.Router();
var request = require ('request');
/* GET home page. */
var jsonString = null;

var urlAbertis = "https://www.quandl.com/api/v3/datasets/YAHOO/MC_ABE.json?api_key=HGoTu3E3A_Lsv6biw1kc";

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
			//console.log(jsonArrayValor);
			
			var parseo_code = body.dataset.dataset_code;
      var parseo_nombre = body.dataset.name;
      console.log(parseo_code)
      console.log(parseo_nombre)
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
  var valores01 = ([dato2 [n=1]]);
  var valores02 = ([dato2 [n=2]]);
  var valores03 = ([dato2 [n=3]]);
  var valores04 = ([dato2 [n=4]]);
  var valores05 = ([dato2 [n=5]]);
  var valores06 = ([dato2 [n=6]]);
  var valores07 = ([dato2 [n=7]]);
  var valores08 = ([dato2 [n=8]]);
  var valores09 = ([dato2 [n=9]]);
  var valores10 = ([dato2 [n=10]]);
  var valores11 = ([dato2 [n=11]]);
  var valores12 = ([dato2 [n=12]]);
  var valores13 = ([dato2 [n=13]]);
  var valores14 = ([dato2 [n=14]]);
  var valores15 = ([dato2 [n=15]]);
  var valores16 = ([dato2 [n=16]]);
  var valores17 = ([dato2 [n=17]]);
  var valores18 = ([dato2 [n=18]]);
  var valores19 = ([dato2 [n=19]]);



router.get('/', function(req, res, next) {
  res.render('./home/ibex/abertis', { 
  	title: 'Abertis',
    valores00: valores00,
    valores01: valores01,
    valores02: valores02,
    valores03: valores03,
    valores04: valores04,
    valores05: valores05,
    valores06: valores06,
    valores07: valores07,
    valores08: valores08,
    valores09: valores09,
    valores10: valores10,
    valores11: valores11,
    valores12: valores12,
    valores13: valores13,
    valores14: valores14,
    valores15: valores15,
    valores16: valores16,
    valores17: valores17,
    valores18: valores18,
    valores19: valores19,
  });
});

});
module.exports = router;
