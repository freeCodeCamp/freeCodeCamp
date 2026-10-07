'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');
var $indexOf = callBound('String.prototype.indexOf');

var Canonicalize = require('./Canonicalize');

var caseFolding = require('../helpers/caseFolding.json');
var forEach = require('../helpers/forEach');
var OwnPropertyKeys = require('own-keys');

var A = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'; // step 1

// https://262.ecma-international.org/8.0/#sec-runtime-semantics-wordcharacters-abstract-operation

module.exports = function WordCharacters(IgnoreCase, Unicode) {
	if (typeof IgnoreCase !== 'boolean' || typeof Unicode !== 'boolean') {
		throw new $TypeError('Assertion failed: `IgnoreCase` and `Unicode` must be booleans');
	}

	var U = '';
	forEach(OwnPropertyKeys(caseFolding.C), function (c) {
		if (
			$indexOf(A, c) === -1 // c not in A
			&& $indexOf(A, Canonicalize(c, IgnoreCase, Unicode)) > -1 // canonicalized c IS in A
		) {
			U += caseFolding.C[c]; // step 3
		}
	});
	forEach(OwnPropertyKeys(caseFolding.S), function (c) {
		if (
			$indexOf(A, c) === -1 // c not in A
			&& $indexOf(A, Canonicalize(c, IgnoreCase, Unicode)) > -1 // canonicalized c IS in A
		) {
			U += caseFolding.S[c]; // step 3
		}
	});

	if ((!Unicode || !IgnoreCase) && U.length > 0) {
		throw new $TypeError('Assertion failed: `U` must be empty when `IgnoreCase` and `Unicode` are not both true'); // step 4
	}

	return A + U; // step 5, 6
};
