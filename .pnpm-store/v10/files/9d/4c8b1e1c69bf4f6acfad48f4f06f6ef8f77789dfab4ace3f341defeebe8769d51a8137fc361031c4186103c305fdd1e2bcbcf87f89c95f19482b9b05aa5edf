'use strict';

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-subtract

module.exports = function NumberSubtract(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}
	return x - y;
};
