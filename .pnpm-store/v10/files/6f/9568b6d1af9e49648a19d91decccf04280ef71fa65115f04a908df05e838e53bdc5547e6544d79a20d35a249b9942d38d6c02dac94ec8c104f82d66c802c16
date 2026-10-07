'use strict';

var $RangeError = require('es-errors/range');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');

var CloneArrayBuffer = require('./CloneArrayBuffer');
var GetValueFromBuffer = require('./GetValueFromBuffer');
var IsSharedArrayBuffer = require('./IsSharedArrayBuffer');
var IsTypedArrayOutOfBounds = require('./IsTypedArrayOutOfBounds');
var MakeTypedArrayWithBufferWitnessRecord = require('./MakeTypedArrayWithBufferWitnessRecord');
var SameValue = require('./SameValue');
var SetValueInBuffer = require('./SetValueInBuffer');
var TypedArrayByteLength = require('./TypedArrayByteLength');
var TypedArrayElementSize = require('./TypedArrayElementSize');
var TypedArrayElementType = require('./TypedArrayElementType');
var TypedArrayLength = require('./TypedArrayLength');

var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteOffset = require('typed-array-byte-offset');
var whichTypedArray = require('which-typed-array');
var GetIntrinsic = require('call-bound');
var isInteger = require('math-intrinsics/isInteger');

var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);

// https://262.ecma-international.org/15.0/#sec-settypedarrayfromtypedarray

module.exports = function SetTypedArrayFromTypedArray(target, targetOffset, source) {
	var whichTarget = whichTypedArray(target);
	if (!whichTarget) {
		throw new $TypeError('Assertion failed: `target` must be a Typed Array');
	}

	if (targetOffset !== Infinity && (!isInteger(targetOffset) || targetOffset < 0)) {
		throw new $TypeError('Assertion failed: `targetOffset` must be a non-negative integer or +Infinity');
	}

	var whichSource = whichTypedArray(source);
	if (!whichSource) {
		throw new $TypeError('Assertion failed: `source` must be a Typed Array');
	}

	var targetBuffer = typedArrayBuffer(target); // step 1

	var targetRecord = MakeTypedArrayWithBufferWitnessRecord(target, 'SEQ-CST'); // step 2

	if (IsTypedArrayOutOfBounds(targetRecord)) {
		throw new $TypeError('target is out of bounds'); // step 3
	}

	var targetLength = TypedArrayLength(targetRecord); // step 4

	var srcBuffer = typedArrayBuffer(source); // step 5

	var srcRecord = MakeTypedArrayWithBufferWitnessRecord(source, 'SEQ-CST'); // step 6

	if (IsTypedArrayOutOfBounds(srcRecord)) {
		throw new $TypeError('target is out of bounds'); // step 7
	}

	var srcLength = TypedArrayLength(srcRecord); // step 8

	var targetType = TypedArrayElementType(target); // step 9

	var targetElementSize = TypedArrayElementSize(target); // step 10

	var targetByteOffset = typedArrayByteOffset(target); // step 11

	var srcType = TypedArrayElementType(source); // step 12

	var srcElementSize = TypedArrayElementSize(source); // step 13

	var srcByteOffset = typedArrayByteOffset(source); // step 14

	if (targetOffset === Infinity) {
		throw new $RangeError('targetOffset must be a non-negative integer or +Infinity'); // step 15
	}

	if (srcLength + targetOffset > targetLength) {
		throw new $RangeError('targetOffset + source.length must not be greater than target.length'); // step 16
	}

	var targetContentType = whichTarget === 'BigInt64Array' || whichTarget === 'BigUint64Array' ? 'BIGINT' : 'NUMBER';
	var sourceContentType = whichSource === 'BigInt64Array' || whichSource === 'BigUint64Array' ? 'BIGINT' : 'NUMBER';
	if (targetContentType !== sourceContentType) {
		throw new $TypeError('source and target must have the same content type'); // step 17
	}

	var sameSharedArrayBuffer = false;
	if (IsSharedArrayBuffer(srcBuffer) && IsSharedArrayBuffer(targetBuffer)) { // step 18
		// a. If srcBuffer.[[ArrayBufferData]] and targetBuffer.[[ArrayBufferData]] are the same Shared Data Block values, let same be true; else let same be false.
		throw new $SyntaxError('SharedArrayBuffer is not supported by this implementation');
	}

	var srcByteIndex;
	if (SameValue(srcBuffer, targetBuffer) || sameSharedArrayBuffer) { // step 19
		var srcByteLength = TypedArrayByteLength(srcRecord); // step 19.a
		srcBuffer = CloneArrayBuffer(srcBuffer, srcByteOffset, srcByteLength, $ArrayBuffer); // step 19.b
		srcByteIndex = 0; // step 19.c
	} else { // step 20
		srcByteIndex = srcByteOffset; // step 20.a
	}

	var targetByteIndex = (targetOffset * targetElementSize) + targetByteOffset; // step 21

	var limit = targetByteIndex + (targetElementSize * srcLength); // step 22

	var value;
	if (srcType === targetType) { // step 23
		// a. NOTE: The transfer must be performed in a manner that preserves the bit-level encoding of the source data.

		while (targetByteIndex < limit) { // step 23.b
			value = GetValueFromBuffer(srcBuffer, srcByteIndex, 'UINT8', true, 'UNORDERED'); // step 23.b.i

			SetValueInBuffer(targetBuffer, targetByteIndex, 'UINT8', value, true, 'UNORDERED'); // step 23.b.ii

			srcByteIndex += 1; // step 23.b.iii

			targetByteIndex += 1; // step 23.b.iv
		}
	} else { // step 24
		while (targetByteIndex < limit) { // step 24.a
			value = GetValueFromBuffer(srcBuffer, srcByteIndex, srcType, true, 'UNORDERED'); // step 24.a.i

			SetValueInBuffer(targetBuffer, targetByteIndex, targetType, value, true, 'UNORDERED'); // step 24.a.ii

			srcByteIndex += srcElementSize; // step 24.a.iii

			targetByteIndex += targetElementSize; // step 24.a.iv
		}
	}
};
