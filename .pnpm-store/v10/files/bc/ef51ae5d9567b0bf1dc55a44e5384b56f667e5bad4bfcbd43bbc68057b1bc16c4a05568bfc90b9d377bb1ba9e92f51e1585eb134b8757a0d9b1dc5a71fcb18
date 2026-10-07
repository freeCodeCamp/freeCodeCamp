'use strict';

var GetIntrinsic = require('get-intrinsic');

var $BigInt = GetIntrinsic('%BigInt%', true);
var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var zero = $BigInt && $BigInt(0);

// https://262.ecma-international.org/11.0/#sec-numeric-types-bigint-remainder

module.exports = function BigIntRemainder(n, d) {
	if (typeof n !== 'bigint' || typeof d !== 'bigint') {
		throw new $TypeError('Assertion failed: `n` and `d` arguments must be BigInts');
	}

	if (d === zero) {
		throw new $RangeError('Division by zero');
	}

	if (n === zero) {
		return zero;
	}

	// shortcut for the actual spec mechanics
	return n % d;
};
