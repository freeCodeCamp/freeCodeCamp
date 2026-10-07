'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');
var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var isPropertyKey = require('../helpers/isPropertyKey');
var SameValue = require('./SameValue');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');

// https://262.ecma-international.org/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}

	var Desc = isPropertyDescriptor(desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};
