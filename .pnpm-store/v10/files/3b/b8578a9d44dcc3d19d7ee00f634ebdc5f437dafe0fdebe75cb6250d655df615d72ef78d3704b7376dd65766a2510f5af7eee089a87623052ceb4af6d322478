'use strict';

var $TypeError = require('es-errors/type');

var isNaN = require('../../helpers/isNaN');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-sameValueZero

module.exports = function NumberSameValueZero(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}

	var xNaN = isNaN(x);
	var yNaN = isNaN(y);
	if (xNaN || yNaN) {
		return xNaN === yNaN;
	}
	return x === y;
};
