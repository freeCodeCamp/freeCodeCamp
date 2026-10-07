'use strict';

var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var HasOwnProperty = require('./HasOwnProperty');
var IsExtensible = require('./IsExtensible');

// https://262.ecma-international.org/12.0/#sec-setfunctionlength

module.exports = function SetFunctionLength(F, length) {
	if (typeof F !== 'function' || !IsExtensible(F) || HasOwnProperty(F, 'length')) {
		throw new $TypeError('Assertion failed: `F` must be an extensible function and lack an own `length` property');
	}
	if (typeof length !== 'number') {
		throw new $TypeError('Assertion failed: `length` must be a Number');
	}
	if (length !== Infinity && (!isInteger(length) || length < 0)) {
		throw new $TypeError('Assertion failed: `length` must be ∞, or an integer >= 0');
	}
	return DefinePropertyOrThrow(F, 'length', {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': length,
		'[[Writable]]': false
	});
};
