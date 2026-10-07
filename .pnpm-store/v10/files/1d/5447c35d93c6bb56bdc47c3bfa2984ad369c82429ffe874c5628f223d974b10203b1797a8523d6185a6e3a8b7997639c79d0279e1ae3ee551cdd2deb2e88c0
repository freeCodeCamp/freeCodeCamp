'use strict';

var $TypeError = require('es-errors/type');

var IsBigIntElementType = require('./IsBigIntElementType');
var IsUnclampedIntegerElementType = require('./IsUnclampedIntegerElementType');
var ValidateTypedArray = require('./ValidateTypedArray');

var whichTypedArray = require('which-typed-array');

// https://262.ecma-international.org/12.0/#sec-validateintegertypedarray

var tableTAO = require('./tables/typed-array-objects');

module.exports = function ValidateIntegerTypedArray(typedArray) {
	var waitable = arguments.length > 1 ? arguments[1] : false; // step 1

	if (typeof waitable !== 'boolean') {
		throw new $TypeError('Assertion failed: `waitable` must be a Boolean');
	}

	var buffer = ValidateTypedArray(typedArray); // step 2

	var typeName = whichTypedArray(typedArray); // step 3

	var type = tableTAO.name['$' + typeName]; // step 4

	if (waitable) { // step 5
		if (typeName !== 'Int32Array' && typeName !== 'BigInt64Array') {
			throw new $TypeError('Assertion failed: `typedArray` must be an Int32Array or BigInt64Array when `waitable` is true'); // step 5.a
		}
	} else if (!IsUnclampedIntegerElementType(type) && !IsBigIntElementType(type)) {
		throw new $TypeError('Assertion failed: `typedArray` must be an integer TypedArray'); // step 6.a
	}

	return buffer; // step 7
};
