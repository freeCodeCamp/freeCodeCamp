'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');
var $indexOf = callBound('String.prototype.indexOf');

var Canonicalize = require('./Canonicalize');

var caseFolding = require('../helpers/caseFolding.json');
var forEach = require('../helpers/forEach');
var isRegExpRecord = require('../helpers/records/regexp-record');
var OwnPropertyKeys = require('own-keys');

var basicWordChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'; // step 1

// https://262.ecma-international.org/14.0/#sec-runtime-semantics-wordcharacters-abstract-operation

module.exports = function WordCharacters(rer) {
	if (!isRegExpRecord(rer)) {
		throw new $TypeError('Assertion failed: `rer` must be a RegExp Record');
	}

	var extraWordChars = '';
	forEach(OwnPropertyKeys(caseFolding.C), function (c) {
		if (
			$indexOf(basicWordChars, c) === -1 // c not in A
			&& $indexOf(basicWordChars, Canonicalize(rer, c)) > -1 // canonicalized c IS in A
		) {
			extraWordChars += caseFolding.C[c]; // step 3
		}
	});
	forEach(OwnPropertyKeys(caseFolding.S), function (c) {
		if (
			$indexOf(basicWordChars, c) === -1 // c not in A
			&& $indexOf(basicWordChars, Canonicalize(rer, c)) > -1 // canonicalized c IS in A
		) {
			extraWordChars += caseFolding.S[c]; // step 3
		}
	});

	if ((!rer['[[Unicode]]'] || !rer['[[IgnoreCase]]']) && extraWordChars.length > 0) {
		throw new $TypeError('Assertion failed: `extraWordChars` must be empty when `rer.[[IgnoreCase]]` and `rer.[[Unicode]]` are not both true'); // step 3
	}

	return basicWordChars + extraWordChars; // step 4
};
