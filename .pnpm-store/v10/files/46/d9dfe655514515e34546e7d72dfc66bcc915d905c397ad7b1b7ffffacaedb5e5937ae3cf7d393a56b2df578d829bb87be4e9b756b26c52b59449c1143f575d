'use strict';

var callBound = require('call-bound');

var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');

var $slice = callBound('String.prototype.slice');

// https://262.ecma-international.org/16.0/#sec-stringindexof

module.exports = function StringIndexOf(string, searchValue, fromIndex) {
	if (typeof string !== 'string') {
		throw new $TypeError('Assertion failed: `string` must be a String');
	}
	if (typeof searchValue !== 'string') {
		throw new $TypeError('Assertion failed: `searchValue` must be a String');
	}
	if (!isInteger(fromIndex) || fromIndex < 0) {
		throw new $TypeError('Assertion failed: `fromIndex` must be a non-negative integer');
	}

	var len = string.length; // step 1
	if (searchValue === '' && fromIndex <= len) {
		return fromIndex; // step 2
	}

	var searchLen = searchValue.length; // step 3
	for (var i = fromIndex; i <= (len - searchLen); i += 1) { // step 4
		var candidate = $slice(string, i, i + searchLen); // step 4.a
		if (candidate === searchValue) {
			return i; // step 4.b
		}
	}
	return 'NOT-FOUND'; // step 5
};
