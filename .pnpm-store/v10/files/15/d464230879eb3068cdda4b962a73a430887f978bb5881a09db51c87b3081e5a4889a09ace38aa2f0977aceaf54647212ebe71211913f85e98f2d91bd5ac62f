'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var isInteger = require('math-intrinsics/isInteger');
var isTypedArray = require('is-typed-array');
var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var typedArrayLength = require('typed-array-length');
var whichTypedArray = require('which-typed-array');

var Get = require('./Get');
var IsBigIntElementType = require('./IsBigIntElementType');
var IsDetachedBuffer = require('./IsDetachedBuffer');
var LengthOfArrayLike = require('./LengthOfArrayLike');
var SetValueInBuffer = require('./SetValueInBuffer');
var ToBigInt = require('./ToBigInt');
var ToNumber = require('./ToNumber');
var ToObject = require('./ToObject');
var ToString = require('./ToString');
var TypedArrayElementSize = require('./TypedArrayElementSize');
var TypedArrayElementType = require('./TypedArrayElementType');

// https://262.ecma-international.org/13.0/#sec-settypedarrayfromarraylike

module.exports = function SetTypedArrayFromArrayLike(target, targetOffset, source) {
	var whichTarget = whichTypedArray(target);
	if (!whichTarget) {
		throw new $TypeError('Assertion failed: target must be a TypedArray instance');
	}

	if (targetOffset !== Infinity && (!isInteger(targetOffset) || targetOffset < 0)) {
		throw new $TypeError('Assertion failed: targetOffset must be a non-negative integer or +Infinity');
	}

	if (isTypedArray(source)) {
		throw new $TypeError('Assertion failed: source must not be a TypedArray instance');
	}

	var targetBuffer = typedArrayBuffer(target); // step 1

	if (IsDetachedBuffer(targetBuffer)) {
		throw new $TypeError('target’s buffer is detached'); // step 2
	}

	var targetLength = typedArrayLength(target); // step 3

	var targetElementSize = TypedArrayElementSize(target); // step 4

	var targetType = TypedArrayElementType(target); // step 5

	var targetByteOffset = typedArrayByteOffset(target); // step 6

	var src = ToObject(source); // step 7

	var srcLength = LengthOfArrayLike(src); // step 8

	if (targetOffset === Infinity) {
		throw new $RangeError('targetOffset must be a finite integer'); // step 9
	}

	if (srcLength + targetOffset > targetLength) {
		throw new $RangeError('targetOffset + srcLength must be <= target.length'); // step 10
	}

	var targetByteIndex = (targetOffset * targetElementSize) + targetByteOffset; // step 11

	var k = 0; // step 12

	var limit = targetByteIndex + (targetElementSize * srcLength); // step 13

	while (targetByteIndex < limit) { // step 14
		var Pk = ToString(k); // step 14.a

		var value = Get(src, Pk); // step 14.b

		if (IsBigIntElementType(targetType)) {
			value = ToBigInt(value); // step 14.c
		} else {
			value = ToNumber(value); // step 14.d
		}

		if (IsDetachedBuffer(targetBuffer)) {
			throw new $TypeError('target’s buffer is detached'); // step 14.e
		}

		SetValueInBuffer(targetBuffer, targetByteIndex, targetType, value, true, 'Unordered'); // step 14.f

		k += 1; // step 14.g

		targetByteIndex += targetElementSize; // step 14.h
	}
};
