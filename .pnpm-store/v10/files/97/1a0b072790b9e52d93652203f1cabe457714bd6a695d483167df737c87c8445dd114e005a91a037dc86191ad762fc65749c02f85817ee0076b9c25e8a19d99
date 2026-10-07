'use strict';

var $TypeError = require('es-errors/type');

var floor = require('./floor');
var IsFixedLengthArrayBuffer = require('./IsFixedLengthArrayBuffer');
var IsTypedArrayOutOfBounds = require('./IsTypedArrayOutOfBounds');
var TypedArrayElementSize = require('./TypedArrayElementSize');

var isTypedArrayWithBufferWitnessRecord = require('../helpers/records/typed-array-with-buffer-witness-record');

var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var typedArrayLength = require('typed-array-length');

// https://www.ecma-international.org/ecma-262/15.0/#sec-typedarraylength

module.exports = function TypedArrayLength(taRecord) {
	if (!isTypedArrayWithBufferWitnessRecord(taRecord)) {
		throw new $TypeError('Assertion failed: `taRecord` must be a TypedArray With Buffer Witness Record');
	}

	if (IsTypedArrayOutOfBounds(taRecord)) {
		throw new $TypeError('Assertion failed: `taRecord` is out of bounds'); // step 1
	}

	var O = taRecord['[[Object]]']; // step 2

	var isFixed = IsFixedLengthArrayBuffer(typedArrayBuffer(O));

	var length = isFixed ? typedArrayLength(O) : 'AUTO';
	if (length !== 'AUTO') {
		return length; // step 3
	}

	if (isFixed) {
		throw new $TypeError('Assertion failed: array buffer is not fixed length'); // step 4
	}

	var byteOffset = typedArrayByteOffset(O); // step 5

	var elementSize = TypedArrayElementSize(O); // step 6

	var byteLength = taRecord['[[CachedBufferByteLength]]']; // step 7

	if (byteLength === 'DETACHED') {
		throw new $TypeError('Assertion failed: typed array is detached'); // step 8
	}

	return floor((byteLength - byteOffset) / elementSize); // step 9
};
