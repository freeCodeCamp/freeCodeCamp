'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');
var hasOwn = require('hasown');

var $charCodeAt = callBound('String.prototype.charCodeAt');
var $toUpperCase = callBound('String.prototype.toUpperCase');

var caseFolding = require('../helpers/caseFolding.json');

// https://262.ecma-international.org/6.0/#sec-runtime-semantics-canonicalize-ch

module.exports = function Canonicalize(ch, IgnoreCase, Unicode) {
	if (typeof ch !== 'string') {
		throw new $TypeError('Assertion failed: `ch` must be a character');
	}

	if (typeof IgnoreCase !== 'boolean' || typeof Unicode !== 'boolean') {
		throw new $TypeError('Assertion failed: `IgnoreCase` and `Unicode` must be Booleans');
	}

	if (!IgnoreCase) {
		return ch; // step 1
	}

	if (Unicode) { // step 2
		if (hasOwn(caseFolding.C, ch)) {
			return caseFolding.C[ch];
		}
		if (hasOwn(caseFolding.S, ch)) {
			return caseFolding.S[ch];
		}
		return ch; // step 2.b
	}

	var u = $toUpperCase(ch); // step 2

	if (u.length !== 1) {
		return ch; // step 3
	}

	var cu = u; // step 4

	if ($charCodeAt(ch, 0) >= 128 && $charCodeAt(cu, 0) < 128) {
		return ch; // step 5
	}

	return cu;
};
