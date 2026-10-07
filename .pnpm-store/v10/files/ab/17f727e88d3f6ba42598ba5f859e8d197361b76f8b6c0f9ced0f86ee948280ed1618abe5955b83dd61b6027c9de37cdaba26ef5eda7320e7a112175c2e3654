'use strict';

var $TypeError = require('es-errors/type');

var ToInt32 = require('../ToInt32');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-bitwiseNOT

module.exports = function NumberBitwiseNOT(x) {
	if (typeof x !== 'number') {
		throw new $TypeError('Assertion failed: `x` argument must be a Number');
	}
	var oldValue = ToInt32(x);
	// Return the result of applying the bitwise operator op to lnum and rnum. The result is a signed 32-bit integer.
	return ~oldValue;
};
