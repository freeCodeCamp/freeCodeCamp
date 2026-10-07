'use strict';

var $RangeError = require('es-errors/range');

var ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

var MAX_SAFE_INTEGER = require('math-intrinsics/constants/maxSafeInteger');

// https://262.ecma-international.org/15.0/#sec-toindex

module.exports = function ToIndex(value) {
	if (typeof value === 'undefined') {
		return 0;
	}
	var integer = ToIntegerOrInfinity(value);
	if (integer < 0 || integer >= MAX_SAFE_INTEGER) {
		throw new $RangeError('index must be >= 0 and < 2 ** 53 - 1');
	}
	return integer;
};
