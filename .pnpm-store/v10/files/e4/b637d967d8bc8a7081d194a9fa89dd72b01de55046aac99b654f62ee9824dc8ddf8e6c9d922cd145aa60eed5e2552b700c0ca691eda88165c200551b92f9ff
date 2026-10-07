'use strict';

var $TypeError = require('es-errors/type');

var IsBigIntElementType = require('./IsBigIntElementType');
var IsUnclampedIntegerElementType = require('./IsUnclampedIntegerElementType');
var TypedArrayElementType = require('./TypedArrayElementType');
var ValidateTypedArray = require('./ValidateTypedArray');

var whichTypedArray = require('which-typed-array');
var typedArrayBuffer = require('typed-array-buffer');

// https://262.ecma-international.org/13.0/#sec-validateintegertypedarray

module.exports = function ValidateIntegerTypedArray(typedArray) {
	var waitable = arguments.length > 1 ? arguments[1] : false; // step 1

	if (typeof waitable !== 'boolean') {
		throw new $TypeError('Assertion failed: `waitable` must be a Boolean');
	}

	ValidateTypedArray(typedArray); // step 2
	var buffer = typedArrayBuffer(typedArray); // step 3

	if (waitable) { // step 5
		var typeName = whichTypedArray(typedArray);
		if (typeName !== 'Int32Array' && typeName !== 'BigInt64Array') {
			throw new $TypeError('Assertion failed: `typedArray` must be an Int32Array or BigInt64Array when `waitable` is true'); // step 5.a
		}
	} else {
		var type = TypedArrayElementType(typedArray); // step 5.a
		if (!IsUnclampedIntegerElementType(type) && !IsBigIntElementType(type)) {
			throw new $TypeError('Assertion failed: `typedArray` must be an integer TypedArray'); // step 5.b
		}
	}

	return buffer; // step 6
};
