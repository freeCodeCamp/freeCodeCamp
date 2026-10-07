'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');

/** @type {undefined | ((thisArg: import('.').TypedArray) => Buffer<ArrayBufferLike>)} */
var $typedArrayBuffer = callBound('TypedArray.prototype.buffer', true);

var isTypedArray = require('is-typed-array');

/** @type {import('.')} */
// node <= 0.10, < 0.11.4 has a nonconfigurable own property instead of a prototype getter
module.exports = $typedArrayBuffer || function typedArrayBuffer(x) {
	if (!isTypedArray(x)) {
		throw new $TypeError('Not a Typed Array');
	}
	return x.buffer;
};
