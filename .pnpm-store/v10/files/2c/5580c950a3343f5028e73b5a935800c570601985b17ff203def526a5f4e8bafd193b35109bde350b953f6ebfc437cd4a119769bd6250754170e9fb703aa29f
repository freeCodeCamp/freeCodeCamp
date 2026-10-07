'use strict';

var $TypeError = require('es-errors/type');
var isNegativeZero = require('math-intrinsics/isNegativeZero');
var isObject = require('es-object-atoms/isObject');

var callBound = require('call-bound');
var $charAt = callBound('String.prototype.charAt');
var $stringToString = callBound('String.prototype.toString');

var CanonicalNumericIndexString = require('./CanonicalNumericIndexString');

var isPropertyKey = require('../helpers/isPropertyKey');
var isInteger = require('math-intrinsics/isInteger');

// https://262.ecma-international.org/12.0/#sec-stringgetownproperty

module.exports = function StringGetOwnProperty(S, P) {
	var str;
	if (isObject(S)) {
		try {
			str = $stringToString(S);
		} catch (e) { /**/ }
	}
	if (typeof str !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a boxed string object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}
	if (typeof P !== 'string') {
		return void undefined;
	}
	var index = CanonicalNumericIndexString(P);
	var len = str.length;
	if (typeof index === 'undefined' || !isInteger(index) || isNegativeZero(index) || index < 0 || len <= index) {
		return void undefined;
	}
	var resultStr = $charAt(S, index);
	return {
		'[[Configurable]]': false,
		'[[Enumerable]]': true,
		'[[Value]]': resultStr,
		'[[Writable]]': false
	};
};
