'use strict';

var fs = require('fs');
var stripBom = require('strip-bom');

module.exports = function (module, filename) {
	var content = fs.readFileSync(filename, 'utf8');
	module._compile(stripBom(content), filename);
};
