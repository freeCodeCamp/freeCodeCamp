'use strict';

var $TypeError = require('es-errors/type');

var IsValidIntegerIndex = require('./IsValidIntegerIndex');
var SetValueInBuffer = require('./SetValueInBuffer');
var ToBigInt = require('./ToBigInt');
var ToNumber = require('./ToNumber');
var TypedArrayElementSize = require('./TypedArrayElementSize');
var TypedArrayElementType = require('./TypedArrayElementType');

var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var whichTypedArray = require('which-typed-array');

// http://www.ecma-international.org/ecma-262/15.0/#sec-typedarraysetelement

module.exports = function TypedArraySetElement(O, index, value) {
	var which = whichTypedArray(O);
	if (!which) {
		throw new $TypeError('Assertion failed: `O` must be a Typed Array');
	}
	if (typeof index !== 'number') {
		throw new $TypeError('Assertion failed: `index` must be a Number');
	}

	var contentType = which === 'BigInt64Array' || which === 'BigUint64Array' ? 'BIGINT' : 'NUMBER';

	var numValue = contentType === 'BIGINT' ? ToBigInt(value) : ToNumber(value); // steps 1 - 2

	if (IsValidIntegerIndex(O, index)) { // step 3
		var offset = typedArrayByteOffset(O); // step 3.a

		var elementSize = TypedArrayElementSize(O); // step 3.b

		var byteIndexInBuffer = (index * elementSize) + offset; // step 3.c

		var elementType = TypedArrayElementType(O); // step 3.d

		SetValueInBuffer(typedArrayBuffer(O), byteIndexInBuffer, elementType, numValue, true, 'UNORDERED'); // step 3.e
	}
};
