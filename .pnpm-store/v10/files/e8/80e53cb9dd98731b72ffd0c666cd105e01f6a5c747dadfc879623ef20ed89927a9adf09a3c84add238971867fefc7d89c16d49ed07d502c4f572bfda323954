'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyKey = require('../helpers/isPropertyKey');
var OrdinaryDefineOwnProperty = require('./OrdinaryDefineOwnProperty');

// https://262.ecma-international.org/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}
	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return OrdinaryDefineOwnProperty(O, P, newDesc);
};
