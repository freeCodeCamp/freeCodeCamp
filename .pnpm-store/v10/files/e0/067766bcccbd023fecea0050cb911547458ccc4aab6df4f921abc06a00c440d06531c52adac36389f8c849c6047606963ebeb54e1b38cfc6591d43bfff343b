'use strict';

var $TypeError = require('es-errors/type');

var GetPrototypeFromConstructor = require('./GetPrototypeFromConstructor');
var IsConstructor = require('./IsConstructor');
var IsDetachedBuffer = require('./IsDetachedBuffer');
var OrdinarySetPrototypeOf = require('./OrdinarySetPrototypeOf');

var isInteger = require('math-intrinsics/isInteger');
var isArrayBuffer = require('is-array-buffer');
var arrayBufferSlice = require('arraybuffer.prototype.slice');

// https://262.ecma-international.org/12.0/#sec-clonearraybuffer

module.exports = function CloneArrayBuffer(srcBuffer, srcByteOffset, srcLength, cloneConstructor) {
	if (!isArrayBuffer(srcBuffer)) {
		throw new $TypeError('Assertion failed: `srcBuffer` must be an ArrayBuffer instance');
	}
	if (!isInteger(srcByteOffset) || srcByteOffset < 0) {
		throw new $TypeError('Assertion failed: `srcByteOffset` must be a non-negative integer');
	}
	if (!isInteger(srcLength) || srcLength < 0) {
		throw new $TypeError('Assertion failed: `srcLength` must be a non-negative integer');
	}
	if (!IsConstructor(cloneConstructor)) {
		throw new $TypeError('Assertion failed: `cloneConstructor` must be a constructor');
	}

	// 3. Let targetBuffer be ? AllocateArrayBuffer(cloneConstructor, srcLength).
	var proto = GetPrototypeFromConstructor(cloneConstructor, '%ArrayBufferPrototype%'); // step 3, kinda

	if (IsDetachedBuffer(srcBuffer)) {
		throw new $TypeError('`srcBuffer` must not be a detached ArrayBuffer'); // step 4
	}

	/*
    5. Let srcBlock be srcBuffer.[[ArrayBufferData]].
    6. Let targetBlock be targetBuffer.[[ArrayBufferData]].
    7. Perform CopyDataBlockBytes(targetBlock, 0, srcBlock, srcByteOffset, srcLength).
    */
	var targetBuffer = arrayBufferSlice(srcBuffer, srcByteOffset, srcByteOffset + srcLength); // steps 5-7
	OrdinarySetPrototypeOf(targetBuffer, proto); // step 3

	return targetBuffer; // step 8
};
