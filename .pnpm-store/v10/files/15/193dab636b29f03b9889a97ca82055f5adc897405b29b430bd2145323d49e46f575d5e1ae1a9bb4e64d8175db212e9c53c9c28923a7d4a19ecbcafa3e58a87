'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');

var $arrayBufferResizable = callBound('%ArrayBuffer.prototype.resizable%', true);
var $sharedArrayGrowable = callBound('%SharedArrayBuffer.prototype.growable%', true);

var isArrayBuffer = require('is-array-buffer');
var isSharedArrayBuffer = require('is-shared-array-buffer');

// https://262.ecma-international.org/15.0/#sec-isfixedlengtharraybuffer

module.exports = function IsFixedLengthArrayBuffer(arrayBuffer) {
	var isAB = isArrayBuffer(arrayBuffer);
	var isSAB = isSharedArrayBuffer(arrayBuffer);
	if (!isAB && !isSAB) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer or SharedArrayBuffer');
	}

	if (isAB && $arrayBufferResizable) {
		return !$arrayBufferResizable(arrayBuffer); // step 1
	}
	if (isSAB && $sharedArrayGrowable) {
		return !$sharedArrayGrowable(arrayBuffer); // step 1
	}
	return true; // step 2
};
