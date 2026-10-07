'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');

var $indexOf = callBound('String.prototype.indexOf');

var IsArray = require('./IsArray');
var IsInteger = require('./IsInteger');
var WordCharacters = require('./WordCharacters');

var every = require('../helpers/every');

var isChar = function isChar(c) {
	return typeof c === 'string';
};

// https://262.ecma-international.org/8.0/#sec-runtime-semantics-iswordchar-abstract-operation

// note: prior to ES2023, this AO erroneously omitted the latter of its arguments.
module.exports = function IsWordChar(e, InputLength, Input, IgnoreCase, Unicode) {
	if (!IsInteger(e)) {
		throw new $TypeError('Assertion failed: `e` must be an integer');
	}
	if (!IsInteger(InputLength)) {
		throw new $TypeError('Assertion failed: `InputLength` must be an integer');
	}
	if (!IsArray(Input) || !every(Input, isChar)) {
		throw new $TypeError('Assertion failed: `Input` must be a List of characters');
	}
	if (typeof IgnoreCase !== 'boolean' || typeof Unicode !== 'boolean') {
		throw new $TypeError('Assertion failed: `IgnoreCase` and `Unicode` must be booleans');
	}

	if (e === -1 || e === InputLength) {
		return false; // step 1
	}

	var c = Input[e]; // step 2

	var wordChars = WordCharacters(IgnoreCase, Unicode);

	return $indexOf(wordChars, c) > -1; // steps 3-4
};
