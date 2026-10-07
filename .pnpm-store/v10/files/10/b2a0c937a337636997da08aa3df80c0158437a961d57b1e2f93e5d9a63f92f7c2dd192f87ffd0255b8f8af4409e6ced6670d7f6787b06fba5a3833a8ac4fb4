'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Number = GetIntrinsic('%Number%');
var $TypeError = require('es-errors/type');
var min = require('math-intrinsics/min');
var $isNaN = require('math-intrinsics/isNaN');

var $charCodeAt = require('call-bound')('String.prototype.charCodeAt');

var StringToBigInt = require('./StringToBigInt');
var ToNumeric = require('./ToNumeric');
var ToPrimitive = require('./ToPrimitive');

var BigIntLessThan = require('./BigInt/lessThan');
var NumberLessThan = require('./Number/lessThan');

// https://262.ecma-international.org/14.0/#sec-islessthan

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

	if (typeof px === 'string' && typeof py === 'string') { // step 3
		// a. Let lx be the length of px.
		// b. Let ly be the length of py.
		// c. For each integer i starting with 0 such that i < min(lx, ly), in ascending order, do
		// i. Let cx be the integer that is the numeric value of the code unit at index i within px.
		// ii. Let cy be the integer that is the numeric value of the code unit at index i within py.
		// iii. If cx < cy, return true.
		// iv. If cx > cy, return false.
		// d. If lx < ly, return true. Otherwise, return false.

		var lx = px.length; // step 3.a
		var ly = py.length; // step 3.b
		for (var i = 0; i < min(lx, ly); i++) { // step 3.c
			var cx = $charCodeAt(px, i); // step 3.c.i
			var cy = $charCodeAt(py, i); // step 3.c.ii
			if (cx < cy) {
				return true; // step 3.c.iii
			}
			if (cx > cy) {
				return false; // step 3.c.iv
			}
		}
		return lx < ly; // step 3.d
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
