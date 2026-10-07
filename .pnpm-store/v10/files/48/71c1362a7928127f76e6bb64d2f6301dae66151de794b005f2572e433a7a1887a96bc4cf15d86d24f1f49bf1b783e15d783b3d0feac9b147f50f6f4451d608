'use strict';

var $TypeError = require('es-errors/type');

var NumberBitwiseOp = require('../NumberBitwiseOp');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-bitwiseXOR

module.exports = function NumberBitwiseXOR(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}
	return NumberBitwiseOp('^', x, y);
};
