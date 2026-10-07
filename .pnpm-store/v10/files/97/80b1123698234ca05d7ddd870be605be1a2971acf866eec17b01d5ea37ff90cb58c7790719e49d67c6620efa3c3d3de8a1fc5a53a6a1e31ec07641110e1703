'use strict';

var $TypeError = require('es-errors/type');
var callBound = require('call-bound');
var isInteger = require('math-intrinsics/isInteger');

var $numberToString = callBound('Number.prototype.toString');

// https://262.ecma-international.org/14.0/#sec-numeric-types-number-tostring

module.exports = function NumberToString(x, radix) {
	if (typeof x !== 'number') {
		throw new $TypeError('Assertion failed: `x` must be a Number');
	}
	if (!isInteger(radix) || radix < 2 || radix > 36) {
		throw new $TypeError('Assertion failed: `radix` must be an integer >= 2 and <= 36');
	}

	return $numberToString(x, radix); // steps 1 - 12
};
