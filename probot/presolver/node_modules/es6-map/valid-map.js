'use strict';

var isMap = require('./is-map');

module.exports = function (x) {
	if (!isMap(x)) throw new TypeError(x + " is not a Map");
	return x;
};
