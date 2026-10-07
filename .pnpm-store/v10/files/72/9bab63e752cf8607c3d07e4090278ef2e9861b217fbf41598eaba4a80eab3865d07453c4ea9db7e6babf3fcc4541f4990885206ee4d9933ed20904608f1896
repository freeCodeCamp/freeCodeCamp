'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isSharedArrayBuffer = require('is-shared-array-buffer');

// https://262.ecma-international.org/8.0/#sec-issharedarraybuffer

module.exports = function IsSharedArrayBuffer(obj) {
	if (!isObject(obj)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	return isSharedArrayBuffer(obj);
};
