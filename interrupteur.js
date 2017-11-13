var WeMo = require('wemo');

var name = process.argv[2];
var interrupteur = process.argv[3];

WeMo.Search(name, function(err, device) {
	var wemoSwitch = new WeMo(device.ip, device.port);
  wemoSwitch.setBinaryState(interrupteur, function(err, result) { // switch on
  	if (err) console.error(err);
    	console.log(result); // 1
  	wemoSwitch.getBinaryState(function(err, result) {
    		if (err) console.error(err);
    		console.log(result); // 1
	   });
   });
});
