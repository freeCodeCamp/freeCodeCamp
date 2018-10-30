'use strict';
var path = require('path');
var pathIsInside = require('path-is-inside');

module.exports = function (a, b) {
	a = path.resolve(a);
	b = path.resolve(b);

	if (a === b) {
		return false;
	}

	return pathIsInside(a, b);
};
