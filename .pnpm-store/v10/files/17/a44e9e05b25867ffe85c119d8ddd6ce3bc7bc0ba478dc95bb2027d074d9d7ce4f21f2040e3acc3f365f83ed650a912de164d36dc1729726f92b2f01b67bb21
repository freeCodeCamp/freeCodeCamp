'use strict';

var $TypeError = require('es-errors/type');

var NumberAdd = require('./add');
var NumberUnaryMinus = require('./unaryMinus');

// https://262.ecma-international.org/12.0/#sec-numeric-types-number-subtract

module.exports = function NumberSubtract(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}
	return NumberAdd(x, NumberUnaryMinus(y));
};
