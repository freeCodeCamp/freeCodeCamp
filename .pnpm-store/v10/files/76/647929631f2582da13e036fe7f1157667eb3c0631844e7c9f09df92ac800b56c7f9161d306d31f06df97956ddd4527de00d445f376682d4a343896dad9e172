var http = require('http'),
    MemoryStream = require('../index'),
    util = require('util');

var options = {
	host: 'google.com'
};
var memStream = new MemoryStream(null,{
    readable : false
});

var req = http.request(options, function(res) {
	util.pump(res, memStream);
	res.on('end',function(){
	    console.log(memStream.toString());
	});
});
req.end();
