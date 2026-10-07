'use strict';

var callBound = require('call-bound');

var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');

var $charAt = callBound('String.prototype.charAt');

// https://262.ecma-international.org/6.0/#sec-splitmatch

module.exports = function SplitMatch(S, q, R) {
	if (typeof S !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!isInteger(q)) {
		throw new $TypeError('Assertion failed: `q` must be an integer');
	}
	if (typeof R !== 'string') {
		throw new $TypeError('Assertion failed: `R` must be a String');
	}
	var r = R.length;
	var s = S.length;
	if (q + r > s) {
		return false;
	}

	for (var i = 0; i < r; i += 1) {
		if ($charAt(S, q + i) !== $charAt(R, i)) {
			return false;
		}
	}

	return q + r;
};
