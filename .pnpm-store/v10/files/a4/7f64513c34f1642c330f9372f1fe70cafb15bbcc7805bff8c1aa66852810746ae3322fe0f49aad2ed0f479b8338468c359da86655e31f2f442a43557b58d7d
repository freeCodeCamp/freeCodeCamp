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

var tableTAO = require('./tables/typed-array-objects');

// https://262.ecma-international.org/12.0/#sec-settypedarrayfromtypedarray

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
		throw new $TypeError('Assertion failed: source must be a TypedArray instance'); // step 1
	}

	var targetBuffer = typedArrayBuffer(target); // step 2

	if (IsDetachedBuffer(targetBuffer)) {
		throw new $TypeError('target’s buffer is detached'); // step 3
	}

	var targetLength = typedArrayLength(target); // step 4

	var srcBuffer = typedArrayBuffer(source); // step 5

	if (IsDetachedBuffer(srcBuffer)) {
		throw new $TypeError('source’s buffer is detached'); // step 6
	}

	var targetName = whichTarget; // step 7

	var targetType = tableTAO.name['$' + targetName]; // step 8

	var targetElementSize = tableTAO.size['$' + targetType]; // step 9

	var targetByteOffset = typedArrayByteOffset(target); // step 10

	var srcName = whichSource; // step 11

	var srcType = tableTAO.name['$' + srcName]; // step 12

	var srcElementSize = tableTAO.size['$' + srcType]; // step 13

	var srcLength = typedArrayLength(source); // step 14

	var srcByteOffset = typedArrayByteOffset(source); // step 15

	if (targetOffset === Infinity) {
		throw new $RangeError('targetOffset must be a non-negative integer or +Infinity'); // step 16
	}

	if (srcLength + targetOffset > targetLength) {
		throw new $RangeError('targetOffset + source.length must not be greater than target.length'); // step 17
	}

	var targetContentType = whichTarget === 'BigInt64Array' || whichTarget === 'BigUint64Array' ? 'BigInt' : 'Number';
	var sourceContentType = whichSource === 'BigInt64Array' || whichSource === 'BigUint64Array' ? 'BigInt' : 'Number';
	if (targetContentType !== sourceContentType) {
		throw new $TypeError('source and target must have the same content type'); // step 18
	}

	var same;
	if (IsSharedArrayBuffer(srcBuffer) && IsSharedArrayBuffer(targetBuffer)) { // step 19
		// a. If srcBuffer.[[ArrayBufferData]] and targetBuffer.[[ArrayBufferData]] are the same Shared Data Block values, let same be true; else let same be false.
		throw new $SyntaxError('SharedArrayBuffer is not supported by this implementation');
	} else {
		same = SameValue(srcBuffer, targetBuffer); // step 20
	}

	var srcByteIndex;
	if (same) { // step 21
		var srcByteLength = typedArrayByteLength(source); // step 21.a

		srcBuffer = CloneArrayBuffer(srcBuffer, srcByteOffset, srcByteLength, $ArrayBuffer); // step 21.b

		// c. NOTE: %ArrayBuffer% is used to clone srcBuffer because is it known to not have any observable side-effects.

		srcByteIndex = 0; // step 21.d
	} else {
		srcByteIndex = srcByteOffset; // step 22
	}

	var targetByteIndex = (targetOffset * targetElementSize) + targetByteOffset; // step 23

	var limit = targetByteIndex + (targetElementSize * srcLength); // step 24

	var value;
	if (srcType === targetType) { // step 25
		// a. NOTE: If srcType and targetType are the same, the transfer must be performed in a manner that preserves the bit-level encoding of the source data.

		while (targetByteIndex < limit) { // step 25.b
			value = GetValueFromBuffer(srcBuffer, srcByteIndex, 'Uint8', true, 'Unordered'); // step 25.b.i

			SetValueInBuffer(targetBuffer, targetByteIndex, 'Uint8', value, true, 'Unordered'); // step 25.b.ii

			srcByteIndex += 1; // step 25.b.iii

			targetByteIndex += 1; // step 25.b.iv
		}
	} else { // step 26
		while (targetByteIndex < limit) { // step 26.a
			value = GetValueFromBuffer(srcBuffer, srcByteIndex, srcType, true, 'Unordered'); // step 26.a.i

			SetValueInBuffer(targetBuffer, targetByteIndex, targetType, value, true, 'Unordered'); // step 26.a.ii

			srcByteIndex += srcElementSize; // step 26.a.iii

			targetByteIndex += targetElementSize; // step 26.a.iv
		}
	}
};
