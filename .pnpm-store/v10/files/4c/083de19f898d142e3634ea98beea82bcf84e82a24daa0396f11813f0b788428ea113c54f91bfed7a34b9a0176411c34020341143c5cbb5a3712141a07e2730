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

// https://262.ecma-international.org/13.0/#sec-integerindexedelementset

module.exports = function IntegerIndexedElementSet(O, index, value) {
	var arrayTypeName = whichTypedArray(O);
	if (!arrayTypeName) {
		throw new $TypeError('Assertion failed: `O` must be a TypedArray');
	}

	if (typeof index !== 'number') {
		throw new $TypeError('Assertion failed: `index` must be a Number');
	}

	var contentType = arrayTypeName === 'BigInt64Array' || arrayTypeName === 'BigUint64Array' ? 'BigInt' : 'Number';
	var numValue = contentType === 'BigInt' ? ToBigInt(value) : ToNumber(value); // steps 1 - 2

	if (IsValidIntegerIndex(O, index)) { // step 3
		var offset = typedArrayByteOffset(O); // step 3.a

		var elementSize = TypedArrayElementSize(O); // step 3.b

		var indexedPosition = (index * elementSize) + offset; // step 3.c

		var elementType = TypedArrayElementType(O); // step 3.d

		SetValueInBuffer(typedArrayBuffer(O), indexedPosition, elementType, numValue, true, 'Unordered'); // step 3.e
	}
};
