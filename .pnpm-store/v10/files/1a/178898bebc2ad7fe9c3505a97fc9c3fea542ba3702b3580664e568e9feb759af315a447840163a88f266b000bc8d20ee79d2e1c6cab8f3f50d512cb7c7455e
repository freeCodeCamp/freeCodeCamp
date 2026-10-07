'use strict';

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');

var IsArray = require('./IsArray');
var IsConstructor = require('./IsConstructor');
var ValidateTypedArray = require('./ValidateTypedArray');

var availableTypedArrays = require('available-typed-arrays')();
var typedArrayLength = require('typed-array-length');

// https://262.ecma-international.org/7.0/#typedarray-create

module.exports = function TypedArrayCreate(constructor, argumentList) {
	if (!IsConstructor(constructor)) {
		throw new $TypeError('Assertion failed: `constructor` must be a constructor');
	}
	if (!IsArray(argumentList)) {
		throw new $TypeError('Assertion failed: `argumentList` must be a List');
	}
	if (availableTypedArrays.length === 0) {
		throw new $SyntaxError('Assertion failed: Typed Arrays are not supported in this environment');
	}

	// var newTypedArray = Construct(constructor, argumentList); // step 1
	var newTypedArray;
	if (argumentList.length === 0) {
		newTypedArray = new constructor();
	} else if (argumentList.length === 1) {
		newTypedArray = new constructor(argumentList[0]);
	} else if (argumentList.length === 2) {
		newTypedArray = new constructor(argumentList[0], argumentList[1]);
	} else {
		newTypedArray = new constructor(argumentList[0], argumentList[1], argumentList[2]);
	}

	ValidateTypedArray(newTypedArray); // step 2

	if (argumentList.length === 1 && typeof argumentList[0] === 'number') { // step 3
		if (typedArrayLength(newTypedArray) < argumentList[0]) {
			throw new $TypeError('Assertion failed: `argumentList[0]` must be <= `newTypedArray.length`'); // step 3.a
		}
	}

	return newTypedArray; // step 4
};
