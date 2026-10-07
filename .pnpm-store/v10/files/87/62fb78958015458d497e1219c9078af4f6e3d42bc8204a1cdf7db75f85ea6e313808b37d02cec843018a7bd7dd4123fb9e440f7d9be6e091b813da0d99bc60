'use strict';

var $TypeError = require('es-errors/type');

var ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

var isNaN = require('math-intrinsics/isNaN');

// https://262.ecma-international.org/15.0/#sec-makefullyear

module.exports = function MakeFullYear(year) {
	if (typeof year !== 'number') {
		throw new $TypeError('Assertion failed: `year` must be a Number');
	}

	if (isNaN(year)) {
		return NaN; // step 1
	}

	var truncated = ToIntegerOrInfinity(year); // step 2
	if (0 <= truncated && truncated <= 99) {
		return 1900 + truncated; // step 3
	}

	return truncated; // step 4
};
