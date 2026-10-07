'use strict';

var $TypeError = require('es-errors/type');

var IsDetachedBuffer = require('./IsDetachedBuffer');
var IsValidIntegerIndex = require('./IsValidIntegerIndex');
var SetValueInBuffer = require('./SetValueInBuffer');
var ToBigInt = require('./ToBigInt');
var ToNumber = require('./ToNumber');

var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var typedArrayLength = require('typed-array-length');
var whichTypedArray = require('which-typed-array');

var tableTAO = require('./tables/typed-array-objects');

// https://262.ecma-international.org/11.0/#sec-integerindexedelementset

module.exports = function IntegerIndexedElementSet(O, index, value) {
	var arrayTypeName = whichTypedArray(O); // step 9
	if (!arrayTypeName) {
		throw new $TypeError('`O` must be a TypedArray'); // step 1
	}

	if (typeof index !== 'number') {
		throw new $TypeError('`index` must be a Number'); // step 2
	}

	var contentType = arrayTypeName === 'BigInt64Array' || arrayTypeName === 'BigUint64Array' ? 'BigInt' : 'Number';
	var numValue = contentType === 'BigInt' ? ToBigInt(value) : ToNumber(value); // steps 3 - 4

	var buffer = typedArrayBuffer(O); // step 5

	if (IsDetachedBuffer(buffer)) {
		throw new $TypeError('`O` has a detached buffer'); // step 6
	}

	if (!IsValidIntegerIndex(O, index)) {
		return false; // step 7
	}

	var offset = typedArrayByteOffset(O); // step 8

	var length = typedArrayLength(O); // step 9

	if (index < 0 || index >= length) {
		return false; // step 10
	}

	var elementType = tableTAO.name['$' + arrayTypeName]; // step 12

	var elementSize = tableTAO.size['$' + elementType]; // step 10

	var indexedPosition = (index * elementSize) + offset; // step 11

	SetValueInBuffer(buffer, indexedPosition, elementType, numValue, true, 'Unordered'); // step 13

	return true; // step 14
};
