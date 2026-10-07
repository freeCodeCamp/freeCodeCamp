'use strict';

var $TypeError = require('es-errors/type');

var GetValueFromBuffer = require('./GetValueFromBuffer');
var IsValidIntegerIndex = require('./IsValidIntegerIndex');
var TypedArrayElementSize = require('./TypedArrayElementSize');
var TypedArrayElementType = require('./TypedArrayElementType');

var isTypedArray = require('is-typed-array');
var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');

// https://262.ecma-international.org/15.0/#sec-typedarraygetelement

module.exports = function TypedArrayGetElement(O, index) {
	if (!isTypedArray(O)) {
		throw new $TypeError('Assertion failed: `O` must be a TypedArray instance');
	}
	if (typeof index !== 'number') {
		throw new $TypeError('Assertion failed: `index` must be a Number');
	}

	if (!IsValidIntegerIndex(O, index)) {
		return void undefined; // step 1
	}

	var offset = typedArrayByteOffset(O); // step 2

	var elementSize = TypedArrayElementSize(O); // step 3

	var byteIndexInBuffer = (index * elementSize) + offset; // step 4

	var elementType = TypedArrayElementType(O); // step 5

	return GetValueFromBuffer(typedArrayBuffer(O), byteIndexInBuffer, elementType, true, 'UNORDERED'); // step 6
};
