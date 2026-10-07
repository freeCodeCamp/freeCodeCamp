'use strict';

var $TypeError = require('es-errors/type');

var HasOwnProperty = require('./HasOwnProperty');
var ToNumeric = require('./ToNumeric');
var ToPrimitive = require('./ToPrimitive');
var ToString = require('./ToString');
var Type = require('./Type');

var NumberAdd = require('./Number/add');
var NumberBitwiseAND = require('./Number/bitwiseAND');
var NumberBitwiseOR = require('./Number/bitwiseOR');
var NumberBitwiseXOR = require('./Number/bitwiseXOR');
var NumberDivide = require('./Number/divide');
var NumberExponentiate = require('./Number/exponentiate');
var NumberLeftShift = require('./Number/leftShift');
var NumberMultiply = require('./Number/multiply');
var NumberRemainder = require('./Number/remainder');
var NumberSignedRightShift = require('./Number/signedRightShift');
var NumberSubtract = require('./Number/subtract');
var NumberUnsignedRightShift = require('./Number/unsignedRightShift');
var BigIntAdd = require('./BigInt/add');
var BigIntBitwiseAND = require('./BigInt/bitwiseAND');
var BigIntBitwiseOR = require('./BigInt/bitwiseOR');
var BigIntBitwiseXOR = require('./BigInt/bitwiseXOR');
var BigIntDivide = require('./BigInt/divide');
var BigIntExponentiate = require('./BigInt/exponentiate');
var BigIntLeftShift = require('./BigInt/leftShift');
var BigIntMultiply = require('./BigInt/multiply');
var BigIntRemainder = require('./BigInt/remainder');
var BigIntSignedRightShift = require('./BigInt/signedRightShift');
var BigIntSubtract = require('./BigInt/subtract');
var BigIntUnsignedRightShift = require('./BigInt/unsignedRightShift');

// https://262.ecma-international.org/12.0/#sec-applystringornumericbinaryoperator

// https://262.ecma-international.org/12.0/#step-applystringornumericbinaryoperator-operations-table
var table = {
	'**': [NumberExponentiate, BigIntExponentiate],
	'*': [NumberMultiply, BigIntMultiply],
	'/': [NumberDivide, BigIntDivide],
	'%': [NumberRemainder, BigIntRemainder],
	'+': [NumberAdd, BigIntAdd],
	'-': [NumberSubtract, BigIntSubtract],
	'<<': [NumberLeftShift, BigIntLeftShift],
	'>>': [NumberSignedRightShift, BigIntSignedRightShift],
	'>>>': [NumberUnsignedRightShift, BigIntUnsignedRightShift],
	'&': [NumberBitwiseAND, BigIntBitwiseAND],
	'^': [NumberBitwiseXOR, BigIntBitwiseXOR],
	'|': [NumberBitwiseOR, BigIntBitwiseOR]
};

module.exports = function ApplyStringOrNumericBinaryOperator(lval, opText, rval) {
	if (typeof opText !== 'string' || !HasOwnProperty(table, opText)) {
		throw new $TypeError('Assertion failed: `opText` must be a valid operation string');
	}
	if (opText === '+') {
		var lprim = ToPrimitive(lval);
		var rprim = ToPrimitive(rval);
		if (typeof lprim === 'string' || typeof rprim === 'string') {
			var lstr = ToString(lprim);
			var rstr = ToString(rprim);
			return lstr + rstr;
		}
		/* eslint no-param-reassign: 1 */
		lval = lprim;
		rval = rprim;
	}
	var lnum = ToNumeric(lval);
	var rnum = ToNumeric(rval);
	if (Type(lnum) !== Type(rnum)) {
		throw new $TypeError('types of ' + lnum + ' and ' + rnum + ' differ');
	}
	var Operation = table[opText][typeof lnum === 'bigint' ? 1 : 0];
	return Operation(lnum, rnum);
};
