'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Number = GetIntrinsic('%Number%');
var $TypeError = require('es-errors/type');

var $isNaN = require('math-intrinsics/isNaN');

var IsStringPrefix = require('./IsStringPrefix');
var StringToBigInt = require('./StringToBigInt');
var ToNumeric = require('./ToNumeric');
var ToPrimitive = require('./ToPrimitive');

var BigIntLessThan = require('./BigInt/lessThan');
var NumberLessThan = require('./Number/lessThan');

// https://262.ecma-international.org/13.0/#sec-islessthan

// eslint-disable-next-line max-statements, max-lines-per-function
module.exports = function IsLessThan(x, y, LeftFirst) {
	if (typeof LeftFirst !== 'boolean') {
		throw new $TypeError('Assertion failed: LeftFirst argument must be a Boolean');
	}
	var px;
	var py;
	if (LeftFirst) {
		px = ToPrimitive(x, $Number);
		py = ToPrimitive(y, $Number);
	} else {
		py = ToPrimitive(y, $Number);
		px = ToPrimitive(x, $Number);
	}

	if (typeof px === 'string' && typeof py === 'string') {
		if (IsStringPrefix(py, px)) {
			return false;
		}
		if (IsStringPrefix(px, py)) {
			return true;
		}
		/*
		c. Let k be the smallest non-negative integer such that the code unit at index k within px is different from the code unit at index k within py. (There must be such a k, for neither String is a prefix of the other.)
		d. Let m be the integer that is the numeric value of the code unit at index k within px.
		e. Let n be the integer that is the numeric value of the code unit at index k within py.
		f. If m < n, return true. Otherwise, return false.
		*/
		return px < py; // both strings, neither a prefix of the other. shortcut for steps 3 c-f
	}

	var nx;
	var ny;
	if (typeof px === 'bigint' && typeof py === 'string') {
		ny = StringToBigInt(py);
		if (typeof ny === 'undefined') {
			return void undefined;
		}
		return BigIntLessThan(px, ny);
	}
	if (typeof px === 'string' && typeof py === 'bigint') {
		nx = StringToBigInt(px);
		if (typeof nx === 'undefined') {
			return void undefined;
		}
		return BigIntLessThan(nx, py);
	}

	nx = ToNumeric(px);
	ny = ToNumeric(py);

	if (typeof nx === typeof ny) {
		return typeof nx === 'number' ? NumberLessThan(nx, ny) : BigIntLessThan(nx, ny);
	}

	if ($isNaN(nx) || $isNaN(ny)) {
		return void undefined;
	}

	if (nx === -Infinity || ny === Infinity) {
		return true;
	}
	if (nx === Infinity || ny === -Infinity) {
		return false;
	}

	return nx < ny; // by now, these are both finite, and the same type
};
