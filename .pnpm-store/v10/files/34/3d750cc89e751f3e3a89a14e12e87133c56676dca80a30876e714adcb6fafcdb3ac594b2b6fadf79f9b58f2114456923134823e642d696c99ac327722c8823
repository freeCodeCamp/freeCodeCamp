'use strict';

var $TypeError = require('es-errors/type');

var isPrefixOf = require('../helpers/isPrefixOf');

// var callBound = require('call-bound');

// var $charAt = callBound('String.prototype.charAt');

// https://262.ecma-international.org/9.0/#sec-isstringprefix

module.exports = function IsStringPrefix(p, q) {
	if (typeof p !== 'string') {
		throw new $TypeError('Assertion failed: "p" must be a String');
	}

	if (typeof q !== 'string') {
		throw new $TypeError('Assertion failed: "q" must be a String');
	}

	return isPrefixOf(p, q);
	/*
	if (p === q || p === '') {
		return true;
	}

	var pLength = p.length;
	var qLength = q.length;
	if (pLength >= qLength) {
		return false;
	}

	// assert: pLength < qLength

	for (var i = 0; i < pLength; i += 1) {
		if ($charAt(p, i) !== $charAt(q, i)) {
			return false;
		}
	}
	return true;
	*/
};
