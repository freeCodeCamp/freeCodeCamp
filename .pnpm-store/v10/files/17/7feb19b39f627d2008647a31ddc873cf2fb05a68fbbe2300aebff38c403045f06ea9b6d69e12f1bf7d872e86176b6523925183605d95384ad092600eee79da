'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var IsExtensible = require('./IsExtensible');

var isPropertyKey = require('../helpers/isPropertyKey');

// https://262.ecma-international.org/13.0/#sec-definemethodproperty

module.exports = function DefineMethodProperty(homeObject, key, closure, enumerable) {
	if (!isObject(homeObject)) {
		throw new $TypeError('Assertion failed: `homeObject` is not an Object');
	}
	if (!isPropertyKey(key)) {
		throw new $TypeError('Assertion failed: `key` is not a Property Key or a Private Name');
	}
	if (typeof closure !== 'function') {
		throw new $TypeError('Assertion failed: `closure` is not a function');
	}
	if (typeof enumerable !== 'boolean') {
		throw new $TypeError('Assertion failed: `enumerable` is not a Boolean');
	}

	// 1. Assert: homeObject is an ordinary, extensible object with no non-configurable properties.
	if (!IsExtensible(homeObject)) {
		throw new $TypeError('Assertion failed: `homeObject` is not an ordinary, extensible object, with no non-configurable properties');
	}

	// 2. If key is a Private Name, then
	//  a. Return PrivateElement { [[Key]]: key, [[Kind]]: method, [[Value]]: closure }.
	// 3. Else,
	var desc = { // step 3.a
		'[[Value]]': closure,
		'[[Writable]]': true,
		'[[Enumerable]]': enumerable,
		'[[Configurable]]': true
	};
	DefinePropertyOrThrow(homeObject, key, desc); // step 3.b
};
