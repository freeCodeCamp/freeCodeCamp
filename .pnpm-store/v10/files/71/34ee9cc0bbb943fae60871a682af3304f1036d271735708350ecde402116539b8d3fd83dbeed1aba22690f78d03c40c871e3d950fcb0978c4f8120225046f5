'use strict';

var hasOwn = require('hasown');

var $TypeError = require('es-errors/type');

var getSymbolDescription = require('get-symbol-description');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsExtensible = require('./IsExtensible');

// https://262.ecma-international.org/6.0/#sec-setfunctionname

module.exports = function SetFunctionName(F, name) {
	if (typeof F !== 'function') {
		throw new $TypeError('Assertion failed: `F` must be a function');
	}
	if (!IsExtensible(F) || hasOwn(F, 'name')) {
		throw new $TypeError('Assertion failed: `F` must be extensible, and must not have a `name` own property');
	}
	if (typeof name !== 'symbol' && typeof name !== 'string') {
		throw new $TypeError('Assertion failed: `name` must be a Symbol or a String');
	}
	if (typeof name === 'symbol') {
		var description = getSymbolDescription(name);
		// eslint-disable-next-line no-param-reassign
		name = typeof description === 'undefined' ? '' : '[' + description + ']';
	}
	if (arguments.length > 2) {
		var prefix = arguments[2];
		// eslint-disable-next-line no-param-reassign
		name = prefix + ' ' + name;
	}
	return DefinePropertyOrThrow(F, 'name', {
		'[[Value]]': name,
		'[[Writable]]': false,
		'[[Enumerable]]': false,
		'[[Configurable]]': true
	});
};
