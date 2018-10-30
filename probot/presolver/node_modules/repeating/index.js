'use strict';
var isFinite = require('is-finite');

module.exports = function (str, n) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected `input` to be a string');
	}

	if (n < 0 || !isFinite(n)) {
		throw new TypeError('Expected `count` to be a positive finite number');
	}

	var ret = '';

	do {
		if (n & 1) {
			ret += str;
		}

		str += str;
	} while ((n >>= 1));

	return ret;
};
