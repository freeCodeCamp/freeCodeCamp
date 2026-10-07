'use strict';

var $TypeError = require('es-errors/type');

var isNaN = require('../../helpers/isNaN');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-equal

module.exports = function NumberEqual(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}
	if (isNaN(x) || isNaN(y)) {
		return false;
	}
	// shortcut for the actual spec mechanics
	return x === y;
};
