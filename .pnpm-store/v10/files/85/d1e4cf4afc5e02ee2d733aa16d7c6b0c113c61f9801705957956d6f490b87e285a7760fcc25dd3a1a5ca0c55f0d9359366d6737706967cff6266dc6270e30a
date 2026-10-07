'use strict';

var callBound = require('call-bound');

var $TypeError = require('es-errors/type');

var $charAt = callBound('String.prototype.charAt');

var isString = require('is-string');
var isNegativeZero = require('math-intrinsics/isNegativeZero');
var unbox = require('unbox-primitive');

var CanonicalNumericIndexString = require('./CanonicalNumericIndexString');
var IsInteger = require('./IsInteger');
var isPropertyKey = require('../helpers/isPropertyKey');

// https://262.ecma-international.org/6.0/#sec-stringgetindexproperty

module.exports = function StringGetIndexProperty(S, P) {
	if (typeof S === 'string' || !isString(S)) {
		throw new $TypeError('Assertion failed: `S` must be a boxed String Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}

	if (typeof P !== 'string') {
		return void undefined;
	}

	var index = CanonicalNumericIndexString(P);
	if (typeof index === 'undefined' || !IsInteger(index) || isNegativeZero(index)) {
		return void undefined;
	}

	var str = unbox(S);
	var len = str.length;
	if (index < 0 || len <= index) {
		return void undefined;
	}

	var resultStr = $charAt(str, index);

	return {
		'[[Configurable]]': false,
		'[[Enumerable]]': true,
		'[[Value]]': resultStr,
		'[[Writable]]': false
	};
};
