'use strict';

var $TypeError = require('es-errors/type');

var IsFixedLengthArrayBuffer = require('./IsFixedLengthArrayBuffer');
var IsTypedArrayOutOfBounds = require('./IsTypedArrayOutOfBounds');
var TypedArrayElementSize = require('./TypedArrayElementSize');
var TypedArrayLength = require('./TypedArrayLength');

var isTypedArrayWithBufferWitnessRecord = require('../helpers/records/typed-array-with-buffer-witness-record');

var typedArrayByffer = require('typed-array-buffer');
var typedArrayByteLength = require('typed-array-byte-length');

// https://262.ecma-international.org/15.0/#sec-typedarraybytelength

module.exports = function TypedArrayByteLength(taRecord) {
	if (!isTypedArrayWithBufferWitnessRecord(taRecord)) {
		throw new $TypeError('Assertion failed: `taRecord` must be a TypedArray With Buffer Witness Record');
	}

	if (IsTypedArrayOutOfBounds(taRecord)) {
		return 0; // step 1
	}
	var length = TypedArrayLength(taRecord); // step 2

	if (length === 0) {
		return 0; // step 3
	}

	var O = taRecord['[[Object]]']; // step 4

	var isFixed = IsFixedLengthArrayBuffer(typedArrayByffer(O));

	var byteLength = isFixed ? typedArrayByteLength(O) : 'AUTO';
	if (byteLength !== 'AUTO') {
		return byteLength; // step 5
	}

	var elementSize = TypedArrayElementSize(O); // step 6

	return length * elementSize; // step 7
};
