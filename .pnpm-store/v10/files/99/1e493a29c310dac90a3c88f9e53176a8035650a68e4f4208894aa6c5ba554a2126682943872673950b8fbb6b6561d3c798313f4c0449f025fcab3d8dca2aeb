'use strict';

var GetIntrinsic = require('get-intrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/11.0/#sec-numeric-types-bigint-tostring

module.exports = function BigIntToString(x) {
	if (typeof x !== 'bigint') {
		throw new $TypeError('Assertion failed: `x` must be a BigInt');
	}

	return $String(x);
};
