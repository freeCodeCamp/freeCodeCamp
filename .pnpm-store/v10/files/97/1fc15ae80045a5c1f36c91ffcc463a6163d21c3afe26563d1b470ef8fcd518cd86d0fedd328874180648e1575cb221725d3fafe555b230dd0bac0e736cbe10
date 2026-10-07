'use strict';

var $TypeError = require('es-errors/type');

var $byteLength = require('array-buffer-byte-length');
var availableTypedArrays = require('available-typed-arrays')();
var callBound = require('call-bound');
var isArrayBuffer = require('is-array-buffer');
var isSharedArrayBuffer = require('is-shared-array-buffer');

var $sabByteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);

// https://262.ecma-international.org/8.0/#sec-isdetachedbuffer

module.exports = function IsDetachedBuffer(arrayBuffer) {
	var isSAB = isSharedArrayBuffer(arrayBuffer);
	if (!isArrayBuffer(arrayBuffer) && !isSAB) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must be an Object with an [[ArrayBufferData]] internal slot');
	}
	if ((isSAB ? $sabByteLength : $byteLength)(arrayBuffer) === 0) {
		try {
			new global[availableTypedArrays[0]](arrayBuffer); // eslint-disable-line no-new
		} catch (error) {
			return !!error && error.name === 'TypeError';
		}
	}
	return false;
};
