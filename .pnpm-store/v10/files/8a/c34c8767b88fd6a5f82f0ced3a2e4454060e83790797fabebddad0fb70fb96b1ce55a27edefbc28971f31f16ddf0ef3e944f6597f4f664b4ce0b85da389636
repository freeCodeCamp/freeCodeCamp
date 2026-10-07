'use strict';

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var callBound = require('call-bound');
var isInteger = require('math-intrinsics/isInteger');

var $BigIntToString = callBound('BigInt.prototype.toString', true);

// https://262.ecma-international.org/14.0/#sec-numeric-types-bigint-tostring

module.exports = function BigIntToString(x, radix) {
	if (typeof x !== 'bigint') {
		throw new $TypeError('Assertion failed: `x` must be a BigInt');
	}

	if (!isInteger(radix) || radix < 2 || radix > 36) {
		throw new $TypeError('Assertion failed: `radix` must be an integer >= 2 and <= 36');
	}

	if (!$BigIntToString) {
		throw new $SyntaxError('BigInt is not supported');
	}

	return $BigIntToString(x, radix); // steps 1 - 12
};
