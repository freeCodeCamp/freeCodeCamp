'use strict';

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/11.0/#sec-binaryor

module.exports = function BinaryOr(x, y) {
	if ((x !== 0 && x !== 1) || (y !== 0 && y !== 1)) {
		throw new $TypeError('Assertion failed: `x` and `y` must be either 0 or 1');
	}
	return x | y;
};
