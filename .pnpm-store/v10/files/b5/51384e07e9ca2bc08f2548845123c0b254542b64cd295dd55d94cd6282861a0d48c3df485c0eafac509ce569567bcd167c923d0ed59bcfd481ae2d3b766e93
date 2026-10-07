'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');
var hasOwn = require('hasown');

var $charCodeAt = callBound('String.prototype.charCodeAt');
var $toUpperCase = callBound('String.prototype.toUpperCase');

var isRegExpRecord = require('../helpers/records/regexp-record');
var caseFolding = require('../helpers/caseFolding.json');

// https://262.ecma-international.org/14.0/#sec-runtime-semantics-canonicalize-ch

module.exports = function Canonicalize(rer, ch) {
	if (!isRegExpRecord(rer)) {
		throw new $TypeError('Assertion failed: `rer` must be a RegExp Record');
	}

	if (typeof ch !== 'string') {
		throw new $TypeError('Assertion failed: `ch` must be a character');
	}

	if (rer['[[Unicode]]'] && rer['[[IgnoreCase]]']) { // step 1
		if (hasOwn(caseFolding.C, ch)) {
			return caseFolding.C[ch];
		}
		if (hasOwn(caseFolding.S, ch)) {
			return caseFolding.S[ch];
		}
		return ch; // step 1.b
	}

	if (!rer['[[IgnoreCase]]']) {
		return ch; // step 2
	}

	var u = $toUpperCase(ch); // step 5

	if (u.length !== 1) {
		return ch; // step 7
	}

	var cu = u; // step 8

	if ($charCodeAt(ch, 0) >= 128 && $charCodeAt(cu, 0) < 128) {
		return ch; // step 9
	}

	return cu; // step 10
};
