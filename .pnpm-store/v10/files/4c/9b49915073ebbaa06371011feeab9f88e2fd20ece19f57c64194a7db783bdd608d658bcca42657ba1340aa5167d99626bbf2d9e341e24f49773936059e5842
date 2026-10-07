'use strict';

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isNegativeZero = require('math-intrinsics/isNegativeZero');

var GetValueFromBuffer = require('./GetValueFromBuffer');
var IsDetachedBuffer = require('./IsDetachedBuffer');
var IsInteger = require('./IsInteger');

var typedArrayLength = require('typed-array-length');
var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var whichTypedArray = require('which-typed-array');

var tableTAO = require('./tables/typed-array-objects');

// https://262.ecma-international.org/6.0/#sec-integerindexedelementget

module.exports = function IntegerIndexedElementGet(O, index) {
	if (typeof index !== 'number') {
		throw new $TypeError('`index` must be a Number'); // step 1
	}
	var arrayTypeName = whichTypedArray(O); // step 10
	if (!arrayTypeName) {
		throw new $TypeError('`O` must be a TypedArray'); // step 2
	}
	if (arrayTypeName === 'BigInt64Array' || arrayTypeName === 'BigUint64Array') {
		throw new $SyntaxError('BigInt64Array and BigUint64Array do not exist until ES2020');
	}

	var buffer = typedArrayBuffer(O); // step 3

	if (IsDetachedBuffer(buffer)) {
		throw new $TypeError('`O` has a detached buffer'); // step 4
	}

	if (!IsInteger(index) || isNegativeZero(index)) {
		return void undefined; // steps 5 - 6
	}

	var length = typedArrayLength(O); // step 7

	if (index < 0 || index >= length) {
		return void undefined; // step 8
	}

	var offset = typedArrayByteOffset(O); // step 9

	var elementType = tableTAO.name['$' + arrayTypeName]; // step 13

	var elementSize = tableTAO.size['$' + elementType]; // step 11

	var indexedPosition = (index * elementSize) + offset; // step 12

	return GetValueFromBuffer(buffer, indexedPosition, elementType); // step 14
};
