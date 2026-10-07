'use strict';

var $TypeError = require('es-errors/type');

var IsDetachedBuffer = require('./IsDetachedBuffer');
var IsTypedArrayOutOfBounds = require('./IsTypedArrayOutOfBounds');
var MakeTypedArrayWithBufferWitnessRecord = require('./MakeTypedArrayWithBufferWitnessRecord');
var TypedArrayLength = require('./TypedArrayLength');

var isInteger = require('math-intrinsics/isInteger');
var isNegativeZero = require('math-intrinsics/isNegativeZero');

var isTypedArray = require('is-typed-array');
var typedArrayBuffer = require('typed-array-buffer');

// https://262.ecma-international.org/15.0/#sec-isvalidintegerindex

module.exports = function IsValidIntegerIndex(O, index) {
	if (!isTypedArray(O)) {
		throw new $TypeError('Assertion failed: `O` is not a TypedArray object');
	}
	if (typeof index !== 'number') {
		throw new $TypeError('Assertion failed: `index` is not a Number');
	}

	var buffer = typedArrayBuffer(O);

	if (IsDetachedBuffer(buffer)) { return false; } // step 1

	if (!isInteger(index)) { return false; } // step 2

	if (isNegativeZero(index)) { return false; } // step 3

	var taRecord = MakeTypedArrayWithBufferWitnessRecord(O, 'UNORDERED'); // step 4
	if (IsTypedArrayOutOfBounds(taRecord)) {
		return false; // step 6
	}
	var length = TypedArrayLength(taRecord); // step 7

	if (index < 0 || index >= length) { return false; } // step 8

	return true; // step 9
};
