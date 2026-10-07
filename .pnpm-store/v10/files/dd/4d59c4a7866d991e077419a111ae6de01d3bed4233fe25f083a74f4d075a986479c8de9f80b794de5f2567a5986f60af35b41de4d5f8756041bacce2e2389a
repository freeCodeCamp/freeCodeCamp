'use strict';

var GetIntrinsic = require('get-intrinsic');

var $BigInt = GetIntrinsic('%BigInt%', true);
var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/11.0/#sec-numeric-types-bigint-divide

module.exports = function BigIntDivide(x, y) {
	if (typeof x !== 'bigint' || typeof y !== 'bigint') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be BigInts');
	}
	if (y === $BigInt(0)) {
		throw new $RangeError('Division by zero');
	}
	// shortcut for the actual spec mechanics
	return x / y;
};
