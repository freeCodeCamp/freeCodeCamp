'use strict';

var $TypeError = require('es-errors/type');
var isNegativeZero = require('math-intrinsics/isNegativeZero');

var IsDetachedBuffer = require('./IsDetachedBuffer');

var isInteger = require('math-intrinsics/isInteger');
var typedArrayBuffer = require('typed-array-buffer');

// https://262.ecma-international.org/12.0/#sec-isvalidintegerindex

module.exports = function IsValidIntegerIndex(O, index) {
	// Assert: O is an Integer-Indexed exotic object.
	var buffer = typedArrayBuffer(O); // step 1

	if (typeof index !== 'number') {
		throw new $TypeError('Assertion failed: Type(index) is not Number');
	}

	if (IsDetachedBuffer(buffer)) { return false; } // step 2

	if (!isInteger(index)) { return false; } // step 3

	if (isNegativeZero(index)) { return false; } // step 4

	if (index < 0 || index >= O.length) { return false; } // step 5

	return true; // step 6
};
