var WeMo = require('wemo');
var express = require('express');
var router = express.Router();

router.get('/:piece/:etat', function(req, res, next) {
	var piece=req.params.piece;
	var etat;
	if (req.params.etat=="on"){
	  etat=1;
	}
	if (req.params.etat=="off"){
	  etat=0;
	}

	WeMo.Search(piece, function(err, device) {
		var wemoSwitch = new WeMo(device.ip, device.port);
	  wemoSwitch.setBinaryState(etat, function(err, result) {
	  	if (err) console.error(err);
		  console.log(result);
	  	wemoSwitch.getBinaryState(function(err, result) {
	    		if (err) console.error(err);
					console.log(result);
					res.redirect('/');
		   });
	   });
	});
});

module.exports = router;
