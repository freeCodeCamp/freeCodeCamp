'use strict';

var $TypeError = require('es-errors/type');

var isNaN = require('../../helpers/isNaN');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-lessThan

module.exports = function NumberLessThan(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}

	// If x is NaN, return undefined.
	// If y is NaN, return undefined.
	if (isNaN(x) || isNaN(y)) {
		return void undefined;
	}

	// shortcut for the actual spec mechanics
	return x < y;
};
