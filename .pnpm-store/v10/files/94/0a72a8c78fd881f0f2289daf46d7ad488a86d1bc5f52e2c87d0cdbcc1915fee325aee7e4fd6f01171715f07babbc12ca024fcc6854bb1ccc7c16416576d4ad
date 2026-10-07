'use strict';

var $TypeError = require('es-errors/type');

var IsBigIntElementType = require('./IsBigIntElementType');
var IsUnclampedIntegerElementType = require('./IsUnclampedIntegerElementType');
var TypedArrayElementType = require('./TypedArrayElementType');
var ValidateTypedArray = require('./ValidateTypedArray');

// https://262.ecma-international.org/15.0/#sec-validateintegertypedarray

module.exports = function ValidateIntegerTypedArray(typedArray, waitable) {
	if (typeof waitable !== 'boolean') {
		throw new $TypeError('Assertion failed: `waitable` must be a Boolean');
	}

	var taRecord = ValidateTypedArray(typedArray, 'UNORDERED'); // step 1

	// 2. NOTE: Bounds checking is not a synchronizing operation when typedArray's backing buffer is a growable SharedArrayBuffer.

	var type = TypedArrayElementType(typedArray); // step 4.a
	if (waitable) { // step 3
		if (type !== 'INT32' && type !== 'BIGINT64') {
			throw new $TypeError('Assertion failed: `typedArray` must be an Int32Array or BigInt64Array when `waitable` is true'); // step 5.a
		}
	} else if (!IsUnclampedIntegerElementType(type) && !IsBigIntElementType(type)) { // step 4
		throw new $TypeError('Assertion failed: `typedArray` must be an integer TypedArray'); // step 4.b
	}

	return taRecord; // step 5
};
