'use strict';

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');

var IsDetachedBuffer = require('./IsDetachedBuffer');
var IsInteger = require('./IsInteger');
var SetValueInBuffer = require('./SetValueInBuffer');
var ToNumber = require('./ToNumber');

var isNegativeZero = require('math-intrinsics/isNegativeZero');
var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var typedArrayLength = require('typed-array-length');
var whichTypedArray = require('which-typed-array');

var tableTAO = require('./tables/typed-array-objects');

// https://262.ecma-international.org/6.0/#sec-integerindexedelementset

module.exports = function IntegerIndexedElementSet(O, index, value) {
	if (typeof index !== 'number') {
		throw new $TypeError('`index` must be a Number'); // step 1
	}
	var arrayTypeName = whichTypedArray(O); // step 12
	if (!arrayTypeName) {
		throw new $TypeError('`O` must be a TypedArray'); // step 2
	}
	if (arrayTypeName === 'BigInt64Array' || arrayTypeName === 'BigUint64Array') {
		throw new $SyntaxError('BigInt64Array and BigUint64Array do not exist until ES2020'); // step 2
	}

	var numValue = ToNumber(value); // step 3

	var buffer = typedArrayBuffer(O); // step 5

	if (IsDetachedBuffer(buffer)) {
		throw new $TypeError('`O` has a detached buffer'); // step 6
	}

	if (!IsInteger(index) || isNegativeZero(index)) {
		return false; // steps 7 - 8
	}

	var length = typedArrayLength(O); // step 9

	if (index < 0 || index >= length) {
		return false; // step 10
	}

	var offset = typedArrayByteOffset(O); // step 11

	var elementType = tableTAO.name['$' + arrayTypeName]; // step 15

	var elementSize = tableTAO.size['$' + elementType]; // step 13

	var indexedPosition = (index * elementSize) + offset; // step 14

	SetValueInBuffer(buffer, indexedPosition, elementType, numValue); // step 16

	return true; // step 17
};
