'use strict';

var $TypeError = require('es-errors/type');

var isNaN = require('../../helpers/isNaN');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-unaryMinus

module.exports = function NumberUnaryMinus(x) {
	if (typeof x !== 'number') {
		throw new $TypeError('Assertion failed: `x` argument must be a Number');
	}
	if (isNaN(x)) {
		return NaN;
	}
	return -x;
};
