'use strict';

var $TypeError = require('es-errors/type');

var HasEitherUnicodeFlag = require('./HasEitherUnicodeFlag');

var isRegExpRecord = require('../helpers/records/regexp-record');

var CharSet = require('../helpers/CharSet');

// https://262.ecma-international.org/15.0/#sec-allcharacters

module.exports = function AllCharacters(rer) {
	if (!isRegExpRecord(rer)) {
		throw new $TypeError('Assertion failed: `rer` must be a RegExp Record');
	}

	if (rer['[[UnicodeSets]]'] && rer['[[IgnoreCase]]']) { // step 1
		//   1. Return the CharSet containing all Unicode code points _c_ that do not have a <a href="https://www.unicode.org/reports/tr44/#Simple_Case_Folding">Simple Case Folding</a> mapping (that is, scf(_c_)=_c_).
		return CharSet.getNonSimpleCaseFoldingCodePoints(); // step 1.a
	} else if (HasEitherUnicodeFlag(rer)) { // step 2
		//   1. Return the CharSet containing all code point values.
		return CharSet.getCodePoints(); // step 3.a
	// eslint-disable-next-line no-else-return
	} else { // step 3
		//   1. Return the CharSet containing all code unit values.
		return CharSet.getCodeUnits(); // step 3.a
	}
};
