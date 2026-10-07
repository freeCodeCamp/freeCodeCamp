'use strict';

var $TypeError = require('es-errors/type');

var GetValueFromBuffer = require('./GetValueFromBuffer');
var IsValidIntegerIndex = require('./IsValidIntegerIndex');

var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var whichTypedArray = require('which-typed-array');

var tableTAO = require('./tables/typed-array-objects');

// https://262.ecma-international.org/12.0/#sec-integerindexedelementget

module.exports = function IntegerIndexedElementGet(O, index) {
	var arrayTypeName = whichTypedArray(O); // step 4
	if (!arrayTypeName) {
		throw new $TypeError('Assertion failed: `O` must be a TypedArray'); // step 1
	}

	if (typeof index !== 'number') {
		throw new $TypeError('Assertion failed: `index` must be a Number');
	}

	if (!IsValidIntegerIndex(O, index)) {
		return void undefined; // step 2
	}

	var offset = typedArrayByteOffset(O); // step 3

	var elementType = tableTAO.name['$' + arrayTypeName]; // step 7

	var elementSize = tableTAO.size['$' + elementType]; // step 5

	var indexedPosition = (index * elementSize) + offset; // step 6

	return GetValueFromBuffer(typedArrayBuffer(O), indexedPosition, elementType, true, 'Unordered'); // step 11
};
