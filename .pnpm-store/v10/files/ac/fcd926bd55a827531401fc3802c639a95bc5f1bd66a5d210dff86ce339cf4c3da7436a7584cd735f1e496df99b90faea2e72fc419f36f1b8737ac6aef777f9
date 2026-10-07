'use strict';

var $TypeError = require('es-errors/type');

var IsArray = require('./IsArray');
var IsInteger = require('./IsInteger');

var every = require('../helpers/every');
var regexTester = require('safe-regex-test');

var isChar = function isChar(c) {
	return typeof c === 'string' && c.length === 1;
};

var isWordCharacter = regexTester(/^[a-zA-Z0-9_]$/);

// https://262.ecma-international.org/6.0/#sec-runtime-semantics-iswordchar-abstract-operation

// note: prior to ES2023, this AO erroneously omitted the latter of its arguments.
module.exports = function IsWordChar(e, InputLength, Input) {
	if (!IsInteger(e)) {
		throw new $TypeError('Assertion failed: `e` must be an integer');
	}
	if (!IsInteger(InputLength)) {
		throw new $TypeError('Assertion failed: `InputLength` must be an integer');
	}
	if (!IsArray(Input) || !every(Input, isChar)) {
		throw new $TypeError('Assertion failed: `Input` must be a List of characters');
	}
	if (e === -1 || e === InputLength) {
		return false; // step 1
	}

	var c = Input[e]; // step 2

	return isWordCharacter(c); // steps 3-4
};
