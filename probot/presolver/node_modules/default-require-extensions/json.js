'use strict';

var fs = require('fs');
var stripBom = require('strip-bom');

module.exports = function (module, filename) {
	var content = fs.readFileSync(filename, 'utf8');
	try {
		module.exports = JSON.parse(stripBom(content));
	} catch (err) {
		err.message = filename + ': ' + err.message;
		throw err;
	}
};
