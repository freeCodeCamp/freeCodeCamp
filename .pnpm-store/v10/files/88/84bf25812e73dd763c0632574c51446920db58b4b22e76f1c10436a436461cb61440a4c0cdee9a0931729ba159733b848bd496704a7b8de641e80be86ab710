'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');

var isPropertyKey = require('../helpers/isPropertyKey');

// https://262.ecma-international.org/13.0/#sec-createnonenumerabledatapropertyorthrow

module.exports = function CreateNonEnumerableDataPropertyOrThrow(O, P, V) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}

	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefinePropertyOrThrow(O, P, newDesc);
};
