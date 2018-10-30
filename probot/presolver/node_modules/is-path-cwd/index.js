'use strict';
var path = require('path');

module.exports = function (str) {
	return path.resolve(str) === path.resolve(process.cwd());
};
