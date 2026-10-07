'use strict';

var $RangeError = require('es-errors/range');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var GetIntrinsic = require('get-intrinsic');
var isInteger = require('math-intrinsics/isInteger');
var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteLength = require('typed-array-byte-length');
var typedArrayByteOffset = require('typed-array-byte-offset');
var typedArrayLength = require('typed-array-length');
var whichTypedArray = require('which-typed-array');

var CloneArrayBuffer = require('./CloneArrayBuffer');
var GetValueFromBuffer = require('./GetValueFromBuffer');
var IsDetachedBuffer = require('./IsDetachedBuffer');
var IsSharedArrayBuffer = require('./IsSharedArrayBuffer');
var SameValue = require('./SameValue');
var SetValueInBuffer = require('./SetValueInBuffer');
var TypedArrayElementSize = require('./TypedArrayElementSize');
var TypedArrayElementType = require('./TypedArrayElementType');

var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);

// https://262.ecma-international.org/14.0/#sec-settypedarrayfromtypedarray

module.exports = function SetTypedArrayFromTypedArray(target, targetOffset, source) {
	var whichTarget = whichTypedArray(target);
	if (!whichTarget) {
		throw new $TypeError('Assertion failed: target must be a TypedArray instance');
	}

	if (targetOffset !== Infinity && (!isInteger(targetOffset) || targetOffset < 0)) {
		throw new $TypeError('Assertion failed: targetOffset must be a non-negative integer or +Infinity');
	}

	var whichSource = whichTypedArray(source);
	if (!whichSource) {
		throw new $TypeError('Assertion failed: source must be a TypedArray instance');
	}

	var targetBuffer = typedArrayBuffer(target); // step 1

	if (IsDetachedBuffer(targetBuffer)) {
		throw new $TypeError('target’s buffer is detached'); // step 2
	}

	var targetLength = typedArrayLength(target); // step 3

	var srcBuffer = typedArrayBuffer(source); // step 4

	if (IsDetachedBuffer(srcBuffer)) {
		throw new $TypeError('source’s buffer is detached'); // step 5
	}

	var targetType = TypedArrayElementType(target); // step 6

	var targetElementSize = TypedArrayElementSize(target); // step 7

	var targetByteOffset = typedArrayByteOffset(target); // step 8

	var srcType = TypedArrayElementType(source); // step 9

	var srcElementSize = TypedArrayElementSize(source); // step 10

	var srcLength = typedArrayLength(source); // step 11

	var srcByteOffset = typedArrayByteOffset(source); // step 12

	if (targetOffset === Infinity) {
		throw new $RangeError('targetOffset must be a non-negative integer or +Infinity'); // step 13
	}

	if (srcLength + targetOffset > targetLength) {
		throw new $RangeError('targetOffset + source.length must not be greater than target.length'); // step 14
	}

	var targetContentType = whichTarget === 'BigInt64Array' || whichTarget === 'BigUint64Array' ? 'BigInt' : 'Number';
	var sourceContentType = whichSource === 'BigInt64Array' || whichSource === 'BigUint64Array' ? 'BigInt' : 'Number';
	if (targetContentType !== sourceContentType) {
		throw new $TypeError('source and target must have the same content type'); // step 15
	}

	var sameSharedArrayBuffer = false;
	if (IsSharedArrayBuffer(srcBuffer) && IsSharedArrayBuffer(targetBuffer)) { // step 16
		// a. If srcBuffer.[[ArrayBufferData]] and targetBuffer.[[ArrayBufferData]] are the same Shared Data Block values, let same be true; else let same be false.
		throw new $SyntaxError('SharedArrayBuffer is not supported by this implementation');
	}

	var srcByteIndex;
	if (SameValue(srcBuffer, targetBuffer) || sameSharedArrayBuffer) { // step 17
		var srcByteLength = typedArrayByteLength(source); // step 17.a

		srcBuffer = CloneArrayBuffer(srcBuffer, srcByteOffset, srcByteLength, $ArrayBuffer); // step 17.b

		srcByteIndex = 0; // step 17.c
	} else {
		srcByteIndex = srcByteOffset; // step 18
	}

	var targetByteIndex = (targetOffset * targetElementSize) + targetByteOffset; // step 19

	var limit = targetByteIndex + (targetElementSize * srcLength); // step 20

	var value;
	if (srcType === targetType) { // step 21
		// a. NOTE: The transfer must be performed in a manner that preserves the bit-level encoding of the source data.

		while (targetByteIndex < limit) { // step 21.b
			value = GetValueFromBuffer(srcBuffer, srcByteIndex, 'Uint8', true, 'Unordered'); // step 21.b.i

			SetValueInBuffer(targetBuffer, targetByteIndex, 'Uint8', value, true, 'Unordered'); // step 21.b.ii

			srcByteIndex += 1; // step 21.b.iii

			targetByteIndex += 1; // step 21.b.iv
		}
	} else { // step 22
		while (targetByteIndex < limit) { // step 22.a
			value = GetValueFromBuffer(srcBuffer, srcByteIndex, srcType, true, 'Unordered'); // step 22.a.i

			SetValueInBuffer(targetBuffer, targetByteIndex, targetType, value, true, 'Unordered'); // step 22.a.ii

			srcByteIndex += srcElementSize; // step 22.a.iii

			targetByteIndex += targetElementSize; // step 22.a.iv
		}
	}
};
