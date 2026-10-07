'use strict';

var $TypeError = require('es-errors/type');

var substring = require('./substring');

var isInteger = require('../helpers/isInteger');

// https://262.ecma-international.org/16.0/#sec-stringlastindexof

module.exports = function StringLastIndexOf(string, searchValue, fromIndex) {
	if (typeof string !== 'string') {
		throw new $TypeError('Assertion failed: `string` must be a string');
	}
	if (typeof searchValue !== 'string') {
		throw new $TypeError('Assertion failed: `searchValue` must be a string');
	}
	if (!isInteger(fromIndex) || fromIndex < 0) {
		throw new $TypeError('Assertion failed: `fromIndex` must be a non-negative integer');
	}

	var len = string.length; // step 1

	var searchLen = searchValue.length; // step 2

	if (!((fromIndex + searchLen) <= len)) {
		throw new $TypeError('Assertion failed: fromIndex + searchLen ≤ len'); // step 3
	}

	for (var i = fromIndex; i >= 0; i--) { // step 4
		var candidate = substring(string, i, i + searchLen); // step 4.a
		if (candidate === searchValue) {
			return i; // step 4.b
		}
	}

	return 'NOT-FOUND'; // step 5
};
