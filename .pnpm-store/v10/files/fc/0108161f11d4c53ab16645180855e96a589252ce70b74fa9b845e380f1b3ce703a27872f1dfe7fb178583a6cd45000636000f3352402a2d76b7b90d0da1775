'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var isPropertyKey = require('../helpers/isPropertyKey');
var SameValue = require('./SameValue');

// https://262.ecma-international.org/6.0/#sec-createmethodproperty

module.exports = function CreateMethodProperty(O, P, V) {
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
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		newDesc
	);
};
