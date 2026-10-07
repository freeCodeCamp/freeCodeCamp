'use strict';

var isInteger = require('math-intrinsics/isInteger');
var MAX_SAFE_INTEGER = require('math-intrinsics/constants/maxSafeInteger');

var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

var $TypeError = require('es-errors/type');

var $charCodeAt = require('call-bound')('String.prototype.charCodeAt');

// https://262.ecma-international.org/6.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (typeof S !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!isInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (typeof unicode !== 'boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}

	var first = $charCodeAt(S, index);
	if (!isLeadingSurrogate(first)) {
		return index + 1;
	}

	var second = $charCodeAt(S, index + 1);
	if (!isTrailingSurrogate(second)) {
		return index + 1;
	}

	return index + 2;
};
