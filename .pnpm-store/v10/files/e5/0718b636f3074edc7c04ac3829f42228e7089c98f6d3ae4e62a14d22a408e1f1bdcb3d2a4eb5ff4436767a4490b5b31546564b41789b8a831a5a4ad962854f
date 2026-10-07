'use strict';

var $TypeError = require('es-errors/type');

var isTypedArray = require('is-typed-array');
var typedArrayBuffer = require('typed-array-buffer');
var typedArrayLength = require('typed-array-length');

var IsFixedLengthArrayBuffer = require('./IsFixedLengthArrayBuffer');
var IsSharedArrayBuffer = require('./IsSharedArrayBuffer');

// https://262.ecma-international.org/16.0/#sec-istypedarrayfixedlength

module.exports = function IsTypedArrayFixedLength(O) {
	if (!isTypedArray(O)) {
		throw new $TypeError('Assertion failed: `obj` must be a Typed Array');
	}

	// 2. Let buffer be O.[[ViewedArrayBuffer]].
	var buffer = typedArrayBuffer(O); // step 2

	var isFixed = IsFixedLengthArrayBuffer(buffer);

	var length = isFixed ? typedArrayLength(O) : 'AUTO';
	if (length === 'AUTO') {
		return false; // step 1
	}

	if (!isFixed && !IsSharedArrayBuffer(buffer)) {
		return false; // step 3
	}

	return true; // step 4
};
