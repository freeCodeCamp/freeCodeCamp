'use strict';

var GetIntrinsic = require('get-intrinsic');

var $BigInt = GetIntrinsic('%BigInt%', true);
var $TypeError = require('es-errors/type');

var zero = $BigInt && $BigInt(0);

// https://262.ecma-international.org/11.0/#sec-numeric-types-bigint-unaryMinus

module.exports = function BigIntUnaryMinus(x) {
	if (typeof x !== 'bigint') {
		throw new $TypeError('Assertion failed: `x` argument must be a BigInt');
	}

	if (x === zero) {
		return zero;
	}

	return -x;
};
