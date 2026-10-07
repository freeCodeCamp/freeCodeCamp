'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var isTypedArray = require('is-typed-array');
var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var typedArrayLength = require('typed-array-length');
var whichTypedArray = require('which-typed-array');
var isInteger = require('math-intrinsics/isInteger');

var Get = require('./Get');
var IsBigIntElementType = require('./IsBigIntElementType');
var IsDetachedBuffer = require('./IsDetachedBuffer');
var LengthOfArrayLike = require('./LengthOfArrayLike');
var SetValueInBuffer = require('./SetValueInBuffer');
var ToBigInt = require('./ToBigInt');
var ToNumber = require('./ToNumber');
var ToObject = require('./ToObject');
var ToString = require('./ToString');

var tableTAO = require('./tables/typed-array-objects');

// https://262.ecma-international.org/12.0/#sec-settypedarrayfromarraylike

module.exports = function SetTypedArrayFromArrayLike(target, targetOffset, source) {
	var whichTarget = whichTypedArray(target);
	if (!whichTarget) {
		throw new $TypeError('Assertion failed: target must be a TypedArray instance');
	}

	if (targetOffset !== Infinity && (!isInteger(targetOffset) || targetOffset < 0)) {
		throw new $TypeError('Assertion failed: targetOffset must be a non-negative integer or +Infinity');
	}

	if (isTypedArray(source)) {
		throw new $TypeError('Assertion failed: source must not be a TypedArray instance'); // step 1
	}

	var targetBuffer = typedArrayBuffer(target); // step 2

	if (IsDetachedBuffer(targetBuffer)) {
		throw new $TypeError('target’s buffer is detached'); // step 3
	}

	var targetLength = typedArrayLength(target); // step 4

	var targetName = whichTarget; // step 5

	var targetType = tableTAO.name['$' + targetName]; // step 7

	var targetElementSize = tableTAO.size['$' + targetType]; // step 6

	var targetByteOffset = typedArrayByteOffset(target); // step 8

	var src = ToObject(source); // step 9

	var srcLength = LengthOfArrayLike(src); // step 10

	if (targetOffset === Infinity) {
		throw new $RangeError('targetOffset must be a finite integer'); // step 11
	}

	if (srcLength + targetOffset > targetLength) {
		throw new $RangeError('targetOffset + srcLength must be <= target.length'); // step 12
	}

	var targetByteIndex = (targetOffset * targetElementSize) + targetByteOffset; // step 13

	var k = 0; // step 14

	var limit = targetByteIndex + (targetElementSize * srcLength); // step 15

	while (targetByteIndex < limit) { // step 16
		var Pk = ToString(k); // step 16.a

		var value = Get(src, Pk); // step 16.b

		if (IsBigIntElementType(targetType)) {
			value = ToBigInt(value); // step 16.c
		} else {
			value = ToNumber(value); // step 16.d
		}

		if (IsDetachedBuffer(targetBuffer)) {
			throw new $TypeError('target’s buffer is detached'); // step 16.e
		}

		SetValueInBuffer(targetBuffer, targetByteIndex, targetType, value, true, 'Unordered'); // step 16.f

		k += 1; // step 16.g

		targetByteIndex += targetElementSize; // step 16.h
	}
};
