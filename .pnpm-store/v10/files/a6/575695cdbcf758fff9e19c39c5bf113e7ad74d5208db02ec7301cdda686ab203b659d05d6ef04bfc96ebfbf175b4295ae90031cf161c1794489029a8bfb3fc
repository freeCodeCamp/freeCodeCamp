'use strict';

var GetIntrinsic = require('get-intrinsic');

var $RangeError = require('es-errors/range');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);

var typedArrayBuffer = require('typed-array-buffer');
var typedArrayByteLength = require('typed-array-byte-length');
var typedArrayByteOffset = require('typed-array-byte-offset');
var typedArrayLength = require('typed-array-length');
var whichTypedArray = require('which-typed-array');
var isInteger = require('math-intrinsics/isInteger');

var CloneArrayBuffer = require('./CloneArrayBuffer');
var GetValueFromBuffer = require('./GetValueFromBuffer');
var IsDetachedBuffer = require('./IsDetachedBuffer');
var IsSharedArrayBuffer = require('./IsSharedArrayBuffer');
var SameValue = require('./SameValue');
var SetValueInBuffer = require('./SetValueInBuffer');
var TypedArrayElementSize = require('./TypedArrayElementSize');
var TypedArrayElementType = require('./TypedArrayElementType');

// https://262.ecma-international.org/13.0/#sec-settypedarrayfromtypedarray

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

	var same;
	if (IsSharedArrayBuffer(srcBuffer) && IsSharedArrayBuffer(targetBuffer)) { // step 16
		// a. If srcBuffer.[[ArrayBufferData]] and targetBuffer.[[ArrayBufferData]] are the same Shared Data Block values, let same be true; else let same be false.
		throw new $SyntaxError('SharedArrayBuffer is not supported by this implementation');
	} else {
		same = SameValue(srcBuffer, targetBuffer); // step 17
	}

	var srcByteIndex;
	if (same) { // step 18
		var srcByteLength = typedArrayByteLength(source); // step 18.a

		srcBuffer = CloneArrayBuffer(srcBuffer, srcByteOffset, srcByteLength, $ArrayBuffer); // step 18.b

		// c. NOTE: %ArrayBuffer% is used to clone srcBuffer because is it known to not have any observable side-effects.

		srcByteIndex = 0; // step 18.d
	} else {
		srcByteIndex = srcByteOffset; // step 19
	}

	var targetByteIndex = (targetOffset * targetElementSize) + targetByteOffset; // step 20

	var limit = targetByteIndex + (targetElementSize * srcLength); // step 21

	var value;
	if (srcType === targetType) { // step 22
		// a. NOTE: If srcType and targetType are the same, the transfer must be performed in a manner that preserves the bit-level encoding of the source data.

		while (targetByteIndex < limit) { // step 22.b
			value = GetValueFromBuffer(srcBuffer, srcByteIndex, 'Uint8', true, 'Unordered'); // step 22.b.i

			SetValueInBuffer(targetBuffer, targetByteIndex, 'Uint8', value, true, 'Unordered'); // step 22.b.ii

			srcByteIndex += 1; // step 22.b.iii

			targetByteIndex += 1; // step 22.b.iv
		}
	} else { // step 23
		while (targetByteIndex < limit) { // step 23.a
			value = GetValueFromBuffer(srcBuffer, srcByteIndex, srcType, true, 'Unordered'); // step 23.a.i

			SetValueInBuffer(targetBuffer, targetByteIndex, targetType, value, true, 'Unordered'); // step 23.a.ii

			srcByteIndex += srcElementSize; // step 23.a.iii

			targetByteIndex += targetElementSize; // step 23.a.iv
		}
	}
};
