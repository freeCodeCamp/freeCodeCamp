'use strict';

var $gOPD = require('gopd');
var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var callBound = require('call-bound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var hasOwn = require('hasown');

var IsArray = require('./IsArray');
var isPropertyKey = require('../helpers/isPropertyKey');
var IsRegExp = require('./IsRegExp');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');

// https://262.ecma-international.org/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!hasOwn(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 / IE 8 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};
