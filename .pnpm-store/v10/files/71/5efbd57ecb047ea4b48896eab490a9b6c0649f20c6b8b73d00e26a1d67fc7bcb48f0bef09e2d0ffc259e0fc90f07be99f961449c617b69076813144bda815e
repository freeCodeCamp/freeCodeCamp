'use strict';

var GetIntrinsic = require('get-intrinsic');

var $BigInt = GetIntrinsic('%BigInt%', true);
var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/11.0/#sec-numeric-types-bigint-bitwiseNOT

module.exports = function BigIntBitwiseNOT(x) {
	if (typeof x !== 'bigint') {
		throw new $TypeError('Assertion failed: `x` argument must be a BigInt');
	}
	return -x - $BigInt(1);
};
