'use strict';

var $TypeError = require('es-errors/type');

var $byteLength = require('array-buffer-byte-length');

var isArrayBuffer = require('is-array-buffer');

var availableTypedArrays = require('available-typed-arrays')();

// https://262.ecma-international.org/6.0/#sec-isdetachedbuffer

module.exports = function IsDetachedBuffer(arrayBuffer) {
	if (!isArrayBuffer(arrayBuffer)) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must be an Object with an [[ArrayBufferData]] internal slot');
	}
	if ($byteLength(arrayBuffer) === 0) {
		try {
			new global[availableTypedArrays[0]](arrayBuffer); // eslint-disable-line no-new
		} catch (error) {
			return !!error && error.name === 'TypeError';
		}
	}
	return false;
};
