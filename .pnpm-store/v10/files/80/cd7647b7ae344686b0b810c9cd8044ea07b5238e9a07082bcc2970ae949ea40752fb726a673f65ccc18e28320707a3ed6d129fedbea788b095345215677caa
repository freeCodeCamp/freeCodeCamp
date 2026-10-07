'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var ToIndex = require('./ToIndex');

var isTypedArray = require('is-typed-array');
var typedArrayLength = require('typed-array-length');

// https://262.ecma-international.org/8.0/#sec-validateatomicaccess

module.exports = function ValidateAtomicAccess(typedArray, requestIndex) {
	if (!isTypedArray(typedArray)) {
		throw new $TypeError('Assertion failed: `typedArray` must be a TypedArray'); // step 1
	}

	var accessIndex = ToIndex(requestIndex); // step 2

	var length = typedArrayLength(typedArray); // step 3

	/*
	// this assertion can never be reached
	if (!(accessIndex >= 0)) {
		throw new $TypeError('Assertion failed: accessIndex >= 0'); // step 4
	}
	*/

	if (accessIndex >= length) {
		throw new $RangeError('index out of range'); // step 5
	}

	return accessIndex; // step 6
};
