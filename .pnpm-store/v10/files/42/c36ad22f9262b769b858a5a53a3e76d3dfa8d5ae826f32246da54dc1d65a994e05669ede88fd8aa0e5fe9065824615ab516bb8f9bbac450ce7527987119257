'use strict';

var isNegativeZero = require('math-intrinsics/isNegativeZero');
var $TypeError = require('es-errors/type');

var NumberSameValueZero = require('./sameValueZero');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-sameValue

module.exports = function NumberSameValue(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}
	if (x === 0 && y === 0) {
		return !(isNegativeZero(x) ^ isNegativeZero(y));
	}
	return NumberSameValueZero(x, y);
};
