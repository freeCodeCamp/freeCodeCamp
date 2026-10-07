'use strict';

var $TypeError = require('es-errors/type');

var IsValidIntegerIndex = require('./IsValidIntegerIndex');
var SetValueInBuffer = require('./SetValueInBuffer');
var ToBigInt = require('./ToBigInt');
var ToNumber = require('./ToNumber');

var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var whichTypedArray = require('which-typed-array');

var tableTAO = require('./tables/typed-array-objects');

// https://262.ecma-international.org/12.0/#sec-integerindexedelementset

module.exports = function IntegerIndexedElementSet(O, index, value) {
	if (typeof index !== 'number') {
		throw new $TypeError('Assertion failed: `index` must be a Number');
	}

	var arrayTypeName = whichTypedArray(O); // step 4.b
	if (!arrayTypeName) {
		throw new $TypeError('Assertion failed: `O` must be a TypedArray'); // step 1
	}

	var contentType = arrayTypeName === 'BigInt64Array' || arrayTypeName === 'BigUint64Array' ? 'BigInt' : 'Number';
	var numValue = contentType === 'BigInt' ? ToBigInt(value) : ToNumber(value); // steps 2 - 3

	if (IsValidIntegerIndex(O, index)) { // step 4
		var offset = typedArrayByteOffset(O); // step 4.a

		var elementType = tableTAO.name['$' + arrayTypeName]; // step 4.e

		var elementSize = tableTAO.size['$' + elementType]; // step 4.c

		var indexedPosition = (index * elementSize) + offset; // step 4.d

		SetValueInBuffer(typedArrayBuffer(O), indexedPosition, elementType, numValue, true, 'Unordered'); // step 4.e
	}

	// 5. Return NormalCompletion(undefined)
};
