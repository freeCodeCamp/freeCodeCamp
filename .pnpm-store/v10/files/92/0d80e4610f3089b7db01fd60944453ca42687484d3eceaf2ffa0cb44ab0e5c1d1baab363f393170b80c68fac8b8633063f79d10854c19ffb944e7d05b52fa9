'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');

var isTypedArray = require('is-typed-array');
var whichTypedArray = require('which-typed-array');

var Get = require('./Get');
var IsTypedArrayOutOfBounds = require('./IsTypedArrayOutOfBounds');
var LengthOfArrayLike = require('./LengthOfArrayLike');
var MakeTypedArrayWithBufferWitnessRecord = require('./MakeTypedArrayWithBufferWitnessRecord');
var ToObject = require('./ToObject');
var ToString = require('./ToString');
var TypedArrayLength = require('./TypedArrayLength');
var TypedArraySetElement = require('./TypedArraySetElement');

// https://262.ecma-international.org/15.0/#sec-settypedarrayfromarraylike

module.exports = function SetTypedArrayFromArrayLike(target, targetOffset, source) {
	var whichTarget = whichTypedArray(target);
	if (!whichTarget) {
		throw new $TypeError('Assertion failed: `target` must be a Typed Array');
	}

	if (targetOffset !== Infinity && (!isInteger(targetOffset) || targetOffset < 0)) {
		throw new $TypeError('Assertion failed: `targetOffset` must be a non-negative integer or +Infinity');
	}

	if (isTypedArray(source)) {
		throw new $TypeError('Assertion failed: `source` must not be a Typed Array');
	}

	var targetRecord = MakeTypedArrayWithBufferWitnessRecord(target, 'SEQ-CST'); // step 1

	if (IsTypedArrayOutOfBounds(targetRecord)) {
		throw new $TypeError('target is out of bounds'); // step 2
	}

	var targetLength = TypedArrayLength(targetRecord); // step 3

	var src = ToObject(source); // step 4

	var srcLength = LengthOfArrayLike(src); // step 5

	if (targetOffset === Infinity) {
		throw new $RangeError('targetOffset must be a finite integer'); // step 6
	}

	if (srcLength + targetOffset > targetLength) {
		throw new $RangeError('targetOffset + srcLength must be <= target.length'); // step 7
	}

	var k = 0; // step 8

	while (k < srcLength) { // step 9
		var Pk = ToString(k); // step 9.a
		var value = Get(src, Pk); // step 9.b
		var targetIndex = targetOffset + k; // step 9.c
		TypedArraySetElement(target, targetIndex, value); // step 9.d
		k += 1; // step 9.e
	}
};
