'use strict';

var $TypeError = require('es-errors/type');

var ArrayBufferByteLength = require('./ArrayBufferByteLength');
var IsDetachedBuffer = require('./IsDetachedBuffer');

var isTypedArray = require('is-typed-array');
var typedArrayBuffer = require('typed-array-buffer');

// https://262.ecma-international.org/15.0/#sec-maketypedarraywithbufferwitnessrecord

module.exports = function MakeTypedArrayWithBufferWitnessRecord(obj, order) {
	if (!isTypedArray(obj)) {
		throw new $TypeError('Assertion failed: `obj` must be a Typed Array');
	}
	if (order !== 'SEQ-CST' && order !== 'UNORDERED') {
		throw new $TypeError('Assertion failed: `order` must be ~SEQ-CST~ or ~UNORDERED~');
	}

	var buffer = typedArrayBuffer(obj); // step 1

	var byteLength = IsDetachedBuffer(buffer) ? 'DETACHED' : ArrayBufferByteLength(buffer, order); // steps 2 - 3

	return { '[[Object]]': obj, '[[CachedBufferByteLength]]': byteLength }; // step 4
};
