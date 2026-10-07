'use strict';

var $TypeError = require('es-errors/type');
var isFinite = require('math-intrinsics/isFinite');
var isNaN = require('math-intrinsics/isNaN');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-divide

module.exports = function NumberDivide(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}
	if (isNaN(x) || isNaN(y) || (!isFinite(x) && !isFinite(y))) {
		return NaN;
	}
	// shortcut for the actual spec mechanics
	return x / y;
};
