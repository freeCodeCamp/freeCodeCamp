'use strict';

var $gOPD = require('gopd');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsExtensible = require('./IsExtensible');
var isPropertyKey = require('../helpers/isPropertyKey');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var SameValue = require('./SameValue');
var ValidateAndApplyPropertyDescriptor = require('./ValidateAndApplyPropertyDescriptor');

// https://262.ecma-international.org/6.0/#sec-ordinarydefineownproperty

module.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (!$gOPD) {
		// ES3/IE 8 fallback
		if (IsAccessorDescriptor(Desc)) {
			throw new $SyntaxError('This environment does not support accessor property descriptors.');
		}
		var creatingNormalDataProperty = !(P in O)
			&& Desc['[[Writable]]']
			&& Desc['[[Enumerable]]']
			&& Desc['[[Configurable]]']
			&& '[[Value]]' in Desc;
		var settingExistingDataProperty = (P in O)
			&& (!('[[Configurable]]' in Desc) || Desc['[[Configurable]]'])
			&& (!('[[Enumerable]]' in Desc) || Desc['[[Enumerable]]'])
			&& (!('[[Writable]]' in Desc) || Desc['[[Writable]]'])
			&& '[[Value]]' in Desc;
		if (creatingNormalDataProperty || settingExistingDataProperty) {
			O[P] = Desc['[[Value]]']; // eslint-disable-line no-param-reassign
			return SameValue(O[P], Desc['[[Value]]']);
		}
		throw new $SyntaxError('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');
	}
	var desc = $gOPD(O, P);
	var current = desc && ToPropertyDescriptor(desc);
	var extensible = IsExtensible(O);
	return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
};
