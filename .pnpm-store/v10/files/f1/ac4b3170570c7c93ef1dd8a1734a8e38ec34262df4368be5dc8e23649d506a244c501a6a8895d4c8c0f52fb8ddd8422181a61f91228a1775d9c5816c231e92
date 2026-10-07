'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var IsDetachedBuffer = require('./IsDetachedBuffer');

var isTypedArray = require('is-typed-array');
var typedArrayBuffer = require('typed-array-buffer');

// https://262.ecma-international.org/13.0/#sec-validatetypedarray

module.exports = function ValidateTypedArray(O) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: `O` must be an Object'); // step 1
	}
	if (!isTypedArray(O)) {
		throw new $TypeError('Assertion failed: `O` must be a Typed Array'); // steps 1 - 2
	}

	var buffer = typedArrayBuffer(O); // step 3

	if (IsDetachedBuffer(buffer)) {
		throw new $TypeError('`O` must be backed by a non-detached buffer'); // step 4
	}
};
