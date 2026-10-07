'use strict';

var $TypeError = require('es-errors/type');

var isRegExpRecord = require('../helpers/records/regexp-record');

// https://262.ecma-international.org/15.0/#sec-runtime-semantics-haseitherunicodeflag-abstract-operation

module.exports = function HasEitherUnicodeFlag(rer) {
	if (!isRegExpRecord(rer)) {
		throw new $TypeError('Assertion failed: `rer` must be a RegExp Record');
	}

	if (rer['[[Unicode]]'] || rer['[[UnicodeSets]]']) { // step 1
		return true; // step 1.a
	}
	return false; // step 2
};
