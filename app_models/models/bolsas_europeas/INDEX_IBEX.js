var express = require ("express");
var mongoose = require ("mongoose");
var request = require ("request");
var appmodel = express();
var aData = null;


mongoose.connect("mongodb://localhost/STOCKMARKET");
var db = mongoose.connection;
var index_ibex35 = null;
db.on("error", console.error.bind(console,"Connection error:"));
db.once('open',function(callback){

	var IBEX_schema = mongoose.Schema({
	fecha: String,
	abierto: Number,
	alto: Number,
	bajo: Number,
	cierre: Number,
	volumen:Number,
	ajuste_cierre:Number,
	});
	index_ibex35 = mongoose.model('index_ibex35', IBEX_schema);

	var urlIbex35 = "https://www.quandl.com/api/v3/datasets/YAHOO/INDEX_IBEX.json?api_key=HGoTu3E3A_Lsv6biw1kc";
	request({
		url: urlIbex35,
		json: true
	}, function (error, response, body){

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
		
			var aDocs = jsonArrayValor;
			//console.log(aDocs)
			index_ibex35.count({},function(error,count){

			if (count === 0){
				for (var n = aDocs.length-1; n >=0 ; n--){
				var docToAdd = new index_ibex35(aDocs[n]);
				docToAdd.save(function(error,docToAdd){
					if (error) return console.error(error)
				});
			}
			}
			else{

				for (var n = aDocs.length-1; n >= 0; n--){
				var docToAdd = new index_ibex35(aDocs[n=0]);
				//var docToAdd = new Document(aDocs[n]);
				docToAdd.save(function(error,docToAdd)
				{
					if (error) return console.error(error)
				});
			}
			}

			});
			
		}
	});
});
module.exports.INDEX_IBEX35 = index_ibex35;