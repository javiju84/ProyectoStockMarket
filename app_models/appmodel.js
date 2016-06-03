var express = require('express');
var mongoose = require ("mongoose");
var request = require ("request");
var appmodel = express();
/*INDEX EUROPEOS*/
var INDEX_IBEX35 = require("./models/bolsas_europeas/INDEX_IBEX");

/*IBEX35*/
var IBEX35_ABERTIS = require("./models/ibex_35/abertis");
var IBEX35_ACS = require("./models/ibex_35/acs");
var IBEX35_ACERINOX = require("./models/ibex_35/acerinox");
var IBEX35_AMADEUS = require("./models/ibex_35/amadeus");
var IBEX35_ACCIONA  = require("./models/ibex_35/acciona");
var IBEX35_BBVA  = require("./models/ibex_35/bbva");
var IBEX35_BANKINTER = require("./models/ibex_35/bankinter");
var IBEX35_CAIXABANK = require("./models/ibex_35/caixabank");
var IBEX35_DIA = require("./models/ibex_35/dia");
var IBEX35_ENDESA = require("./models/ibex_35/endesa");
var IBEX35_ENAGAS = require("./models/ibex_35/enagas");
var IBEX35_FCC = require("./models/ibex_35/fcc");
var IBEX35_FERROVIAL = require("./models/ibex_35/ferrovial");
var IBEX35_GASNATURAL = require("./models/ibex_35/gas_natural");
var IBEX35_GRIFOLS = require("./models/ibex_35/grifols");
var IBEX35_IAG = require("./models/ibex_35/iag");
var IBEX35_IBERDROLA = require("./models/ibex_35/iberdrola");
var IBEX35_INDRA = require("./models/ibex_35/indra");
var IBEX35_INDITEX = require("./models/ibex_35/inditex");
var IBEX35_MAPFRE = require("./models/ibex_35/mapfre");
var IBEX35_ARCELORMITTAL  = require("./models/ibex_35/acelormittal");
var IBEX35_OHL = require("./models/ibex_35/ohl");
var IBEX35_POPULAR = require("./models/ibex_35/popular");
var IBEX35_REE = require("./models/ibex_35/ree");
var IBEX35_REPSOL  = require("./models/ibex_35/repsol");
var IBEX35_SABADELL   = require("./models/ibex_35/sabadell");
var IBEX35_SANTANDER = require("./models/ibex_35/santander");
var IBEX35_TELEFONICA = require("./models/ibex_35/telefonica");
var IBEX35_MEDIASET  = require("./models/ibex_35/mediaset");
var IBEX35_TECREUNIDAS  = require("./models/ibex_35/tecReunidas");






appmodel.listen(3000);
console.log("cargando tablas base datos");
module.exports = appmodel;
