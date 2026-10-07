'use strict';

var $TypeError = require('es-errors/type');

var BigIntBitwiseOp = require('../BigIntBitwiseOp');

// https://262.ecma-international.org/11.0/#sec-numeric-types-bigint-bitwiseXOR

module.exports = function BigIntBitwiseXOR(x, y) {
	if (typeof x !== 'bigint' || typeof y !== 'bigint') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be BigInts');
	}
	return BigIntBitwiseOp('^', x, y);
};
