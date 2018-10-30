'use strict';
var isPathInside = require('is-path-inside');

module.exports = function (str) {
	return isPathInside(str, process.cwd());
};
