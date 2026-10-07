'use strict';

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/15.0/#sec-arraybufferbytelength

var IsDetachedBuffer = require('./IsDetachedBuffer');

var isArrayBuffer = require('is-array-buffer');
var isSharedArrayBuffer = require('is-shared-array-buffer');
var arrayBufferByteLength = require('array-buffer-byte-length');

var callBound = require('call-bound');
var $sabByteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);

var isGrowable = false; // TODO: support this

module.exports = function ArrayBufferByteLength(arrayBuffer, order) {
	var isSAB = isSharedArrayBuffer(arrayBuffer);
	if (!isArrayBuffer(arrayBuffer) && !isSAB) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer or a SharedArrayBuffer');
	}
	if (order !== 'SEQ-CST' && order !== 'UNORDERED') {
		throw new $TypeError('Assertion failed: `order` must be ~SEQ-CST~ or ~UNORDERED~');
	}

	// 1. If IsSharedArrayBuffer(arrayBuffer) is true and arrayBuffer has an [[ArrayBufferByteLengthData]] internal slot, then
	// TODO: see if IsFixedLengthArrayBuffer can be used here in the spec instead
	if (isSAB && isGrowable) { // step 1
		// a. Let bufferByteLengthBlock be arrayBuffer.[[ArrayBufferByteLengthData]].
		// b. Let rawLength be GetRawBytesFromSharedBlock(bufferByteLengthBlock, 0, BIGUINT64, true, order).
		// c. Let isLittleEndian be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
		// d. Return ℝ(RawBytesToNumeric(BIGUINT64, rawLength, isLittleEndian)).
	}

	if (IsDetachedBuffer(arrayBuffer)) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must not be detached'); // step 2
	}

	return isSAB ? $sabByteLength(arrayBuffer) : arrayBufferByteLength(arrayBuffer);
};
