'use strict';

var isSet = require('./is-set');

module.exports = function (x) {
	if (!isSet(x)) throw new TypeError(x + " is not a Set");
	return x;
};
