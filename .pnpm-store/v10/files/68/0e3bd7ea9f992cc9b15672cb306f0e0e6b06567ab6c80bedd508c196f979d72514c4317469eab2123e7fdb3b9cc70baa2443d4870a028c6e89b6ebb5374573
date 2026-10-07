'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var ToIndex = require('./ToIndex');
var TypedArrayElementSize = require('./TypedArrayElementSize');
var TypedArrayLength = require('./TypedArrayLength');

var isTypedArrayWithBufferWitnessRecord = require('../helpers/records/typed-array-with-buffer-witness-record');

var typedArrayByteOffset = require('typed-array-byte-offset');

// https://262.ecma-international.org/15.0/#sec-validateatomicaccess

module.exports = function ValidateAtomicAccess(taRecord, requestIndex) {
	if (!isTypedArrayWithBufferWitnessRecord(taRecord)) {
		throw new $TypeError('Assertion failed: `taRecord` must be a TypedArray With Buffer Witness Record');
	}

	var length = TypedArrayLength(taRecord); // step 1

	var accessIndex = ToIndex(requestIndex); // step 2

	/*
	// this assertion can never be reached
	if (!(accessIndex >= 0)) {
		throw new $TypeError('Assertion failed: accessIndex >= 0'); // step 4
	}
	*/

	if (accessIndex >= length) {
		throw new $RangeError('index out of range'); // step 4
	}

	var typedArray = taRecord['[[Object]]']; // step 5

	var elementSize = TypedArrayElementSize(typedArray); // step 6

	var offset = typedArrayByteOffset(typedArray); // step 7

	return (accessIndex * elementSize) + offset; // step 8
};
