'use strict';

var GetIntrinsic = require('get-intrinsic');

var min = require('math-intrinsics/min');
var $TypeError = require('es-errors/type');
var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);
var $Uint8Array = GetIntrinsic('%Uint8Array%', true);

var callBound = require('call-bound');

var byteLength = require('array-buffer-byte-length');
var $maxByteLength = callBound('%ArrayBuffer.prototype.maxByteLength%', true);
var copy = function copyAB(src, start, end) {
	var that = new $Uint8Array(src);
	if (typeof end === 'undefined') {
		end = that.length; // eslint-disable-line no-param-reassign
	}
	var result = new $ArrayBuffer(end - start);
	var resultArray = new $Uint8Array(result);
	for (var i = 0; i < resultArray.length; i++) {
		resultArray[i] = that[i + start];
	}
	return result;
};
var $abSlice = callBound('%ArrayBuffer.prototype.slice%', true)
	|| function slice(ab, a, b) { // in node < 0.11, slice is an own nonconfigurable property
		return ab.slice ? ab.slice(a, b) : copy(ab, a, b); // node 0.8 lacks `slice`
	};

var DetachArrayBuffer = require('./DetachArrayBuffer');
var IsDetachedBuffer = require('./IsDetachedBuffer');
var IsFixedLengthArrayBuffer = require('./IsFixedLengthArrayBuffer');
var ToIndex = require('./ToIndex');

var isArrayBuffer = require('is-array-buffer');
var isSharedArrayBuffer = require('is-shared-array-buffer');

// https://262.ecma-international.org/15.0/#sec-arraybuffercopyanddetach

module.exports = function ArrayBufferCopyAndDetach(arrayBuffer, newLength, preserveResizability) {
	if (preserveResizability !== 'PRESERVE-RESIZABILITY' && preserveResizability !== 'FIXED-LENGTH') {
		throw new $TypeError('`preserveResizability` must be ~PRESERVE-RESIZABILITY~ or ~FIXED-LENGTH~');
	}

	if (!isArrayBuffer(arrayBuffer) || isSharedArrayBuffer(arrayBuffer)) {
		throw new $TypeError('`arrayBuffer` must be a non-shared ArrayBuffer'); // steps 1 - 2
	}

	var abByteLength;

	var newByteLength;
	if (typeof newLength === 'undefined') { // step 3
		newByteLength = byteLength(arrayBuffer); // step 3.a
		abByteLength = newByteLength;
	} else { // step 4
		newByteLength = ToIndex(newLength); // step 4.a
	}

	if (IsDetachedBuffer(arrayBuffer)) {
		throw new $TypeError('`arrayBuffer` must not be detached'); // step 5
	}

	var newMaxByteLength;
	if (preserveResizability === 'PRESERVE-RESIZABILITY' && !IsFixedLengthArrayBuffer(arrayBuffer)) { // step 6
		newMaxByteLength = $maxByteLength(arrayBuffer); // step 6.a
	} else { // step 7
		newMaxByteLength = 'EMPTY'; // step 7.a
	}

	// commented out since there's no way to set or access this key

	// 8. If arrayBuffer.[[ArrayBufferDetachKey]] is not undefined, throw a TypeError exception.

	// 9. Let newBuffer be ? AllocateArrayBuffer(%ArrayBuffer%, newByteLength, newMaxByteLength).
	var newBuffer = newMaxByteLength === 'EMPTY' ? new $ArrayBuffer(newByteLength) : new $ArrayBuffer(newByteLength, { maxByteLength: newMaxByteLength });

	if (typeof abByteLength !== 'number') {
		abByteLength = byteLength(arrayBuffer);
	}
	var copyLength = min(newByteLength, abByteLength); // step 10
	if (newByteLength > copyLength || newMaxByteLength !== 'EMPTY') {
		var taNew = new $Uint8Array(newBuffer);
		var taOld = new $Uint8Array(arrayBuffer);
		for (var i = 0; i < copyLength; i++) {
			taNew[i] = taOld[i];
		}
	} else {
		newBuffer = $abSlice(arrayBuffer, 0, copyLength); // ? optimization for when the new buffer will not be larger than the old one
	}
	/*
	11. Let fromBlock be arrayBuffer.[[ArrayBufferData]].
	12. Let toBlock be newBuffer.[[ArrayBufferData]].
	13. Perform CopyDataBlockBytes(toBlock, 0, fromBlock, 0, copyLength).
	14. NOTE: Neither creation of the new Data Block nor copying from the old Data Block are observable. Implementations may implement this method as a zero-copy move or a realloc.
	*/

	DetachArrayBuffer(arrayBuffer); // step 15

	return newBuffer; // step 16
};
