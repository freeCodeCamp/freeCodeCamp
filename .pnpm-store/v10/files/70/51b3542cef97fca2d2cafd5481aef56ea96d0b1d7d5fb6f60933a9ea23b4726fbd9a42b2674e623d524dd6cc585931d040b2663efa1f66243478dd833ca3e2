'use strict';

var test = require('tape');
var v = require('es-value-fixtures');
var forEach = require('for-each');
var inspect = require('object-inspect');

var abs = require('../abs');
var floor = require('../floor');
var isFinite = require('../isFinite');
var isInteger = require('../isInteger');
var isNaN = require('../isNaN');
var isNegativeZero = require('../isNegativeZero');
var max = require('../max');
var min = require('../min');
var mod = require('../mod');
var pow = require('../pow');
var round = require('../round');
var sign = require('../sign');

var maxArrayLength = require('../constants/maxArrayLength');
var maxSafeInteger = require('../constants/maxSafeInteger');
var maxValue = require('../constants/maxValue');

test('abs', function (t) {
	t.equal(abs(-1), 1, 'abs(-1) === 1');
	t.equal(abs(+1), 1, 'abs(+1) === 1');
	t.equal(abs(+0), +0, 'abs(+0) === +0');
	t.equal(abs(-0), +0, 'abs(-0) === +0');

	t.end();
});

test('floor', function (t) {
	t.equal(floor(-1.1), -2, 'floor(-1.1) === -2');
	t.equal(floor(+1.1), 1, 'floor(+1.1) === 1');
	t.equal(floor(+0), +0, 'floor(+0) === +0');
	t.equal(floor(-0), -0, 'floor(-0) === -0');
	t.equal(floor(-Infinity), -Infinity, 'floor(-Infinity) === -Infinity');
	t.equal(floor(Number(Infinity)), Number(Infinity), 'floor(+Infinity) === +Infinity');
	t.equal(floor(NaN), NaN, 'floor(NaN) === NaN');
	t.equal(floor(0), +0, 'floor(0) === +0');
	t.equal(floor(-0), -0, 'floor(-0) === -0');
	t.equal(floor(1), 1, 'floor(1) === 1');
	t.equal(floor(-1), -1, 'floor(-1) === -1');
	t.equal(floor(1.1), 1, 'floor(1.1) === 1');
	t.equal(floor(-1.1), -2, 'floor(-1.1) === -2');
	t.equal(floor(maxValue), maxValue, 'floor(maxValue) === maxValue');
	t.equal(floor(maxSafeInteger), maxSafeInteger, 'floor(maxSafeInteger) === maxSafeInteger');

	t.end();
});

test('isFinite', function (t) {
	t.equal(isFinite(0), true, 'isFinite(+0) === true');
	t.equal(isFinite(-0), true, 'isFinite(-0) === true');
	t.equal(isFinite(1), true, 'isFinite(1) === true');
	t.equal(isFinite(Infinity), false, 'isFinite(Infinity) === false');
	t.equal(isFinite(-Infinity), false, 'isFinite(-Infinity) === false');
	t.equal(isFinite(NaN), false, 'isFinite(NaN) === false');

	forEach(v.nonNumbers, function (nonNumber) {
		t.equal(isFinite(nonNumber), false, 'isFinite(' + inspect(nonNumber) + ') === false');
	});

	t.end();
});

test('isInteger', function (t) {
	forEach([].concat(
		// @ts-expect-error TS sucks with concat
		v.nonNumbers,
		v.nonIntegerNumbers
	), function (nonInteger) {
		t.equal(isInteger(nonInteger), false, 'isInteger(' + inspect(nonInteger) + ') === false');
	});

	t.end();
});

test('isNaN', function (t) {
	forEach([].concat(
		// @ts-expect-error TS sucks with concat
		v.nonNumbers,
		v.infinities,
		v.zeroes,
		v.integerNumbers
	), function (nonNaN) {
		t.equal(isNaN(nonNaN), false, 'isNaN(' + inspect(nonNaN) + ') === false');
	});

	t.equal(isNaN(NaN), true, 'isNaN(NaN) === true');

	t.end();
});

test('isNegativeZero', function (t) {
	t.equal(isNegativeZero(-0), true, 'isNegativeZero(-0) === true');
	t.equal(isNegativeZero(+0), false, 'isNegativeZero(+0) === false');
	t.equal(isNegativeZero(1), false, 'isNegativeZero(1) === false');
	t.equal(isNegativeZero(-1), false, 'isNegativeZero(-1) === false');
	t.equal(isNegativeZero(NaN), false, 'isNegativeZero(NaN) === false');
	t.equal(isNegativeZero(Infinity), false, 'isNegativeZero(Infinity) === false');
	t.equal(isNegativeZero(-Infinity), false, 'isNegativeZero(-Infinity) === false');

	forEach(v.nonNumbers, function (nonNumber) {
		t.equal(isNegativeZero(nonNumber), false, 'isNegativeZero(' + inspect(nonNumber) + ') === false');
	});

	t.end();
});

test('max', function (t) {
	t.equal(max(1, 2), 2, 'max(1, 2) === 2');
	t.equal(max(1, 2, 3), 3, 'max(1, 2, 3) === 3');
	t.equal(max(1, 2, 3, 4), 4, 'max(1, 2, 3, 4) === 4');
	t.equal(max(1, 2, 3, 4, 5), 5, 'max(1, 2, 3, 4, 5) === 5');
	t.equal(max(1, 2, 3, 4, 5, 6), 6, 'max(1, 2, 3, 4, 5, 6) === 6');
	t.equal(max(1, 2, 3, 4, 5, 6, 7), 7, 'max(1, 2, 3, 4, 5, 6, 7) === 7');

	t.end();
});

test('min', function (t) {
	t.equal(min(1, 2), 1, 'min(1, 2) === 1');
	t.equal(min(1, 2, 3), 1, 'min(1, 2, 3) === 1');
	t.equal(min(1, 2, 3, 4), 1, 'min(1, 2, 3, 4) === 1');
	t.equal(min(1, 2, 3, 4, 5), 1, 'min(1, 2, 3, 4, 5) === 1');
	t.equal(min(1, 2, 3, 4, 5, 6), 1, 'min(1, 2, 3, 4, 5, 6) === 1');

	t.end();
});

test('mod', function (t) {
	t.equal(mod(1, 2), 1, 'mod(1, 2) === 1');
	t.equal(mod(2, 2), 0, 'mod(2, 2) === 0');
	t.equal(mod(3, 2), 1, 'mod(3, 2) === 1');
	t.equal(mod(4, 2), 0, 'mod(4, 2) === 0');
	t.equal(mod(5, 2), 1, 'mod(5, 2) === 1');
	t.equal(mod(6, 2), 0, 'mod(6, 2) === 0');
	t.equal(mod(7, 2), 1, 'mod(7, 2) === 1');
	t.equal(mod(8, 2), 0, 'mod(8, 2) === 0');
	t.equal(mod(9, 2), 1, 'mod(9, 2) === 1');
	t.equal(mod(10, 2), 0, 'mod(10, 2) === 0');
	t.equal(mod(11, 2), 1, 'mod(11, 2) === 1');

	t.end();
});

test('pow', function (t) {
	t.equal(pow(2, 2), 4, 'pow(2, 2) === 4');
	t.equal(pow(2, 3), 8, 'pow(2, 3) === 8');
	t.equal(pow(2, 4), 16, 'pow(2, 4) === 16');
	t.equal(pow(2, 5), 32, 'pow(2, 5) === 32');
	t.equal(pow(2, 6), 64, 'pow(2, 6) === 64');
	t.equal(pow(2, 7), 128, 'pow(2, 7) === 128');
	t.equal(pow(2, 8), 256, 'pow(2, 8) === 256');
	t.equal(pow(2, 9), 512, 'pow(2, 9) === 512');
	t.equal(pow(2, 10), 1024, 'pow(2, 10) === 1024');

	t.end();
});

test('round', function (t) {
	t.equal(round(1.1), 1, 'round(1.1) === 1');
	t.equal(round(1.5), 2, 'round(1.5) === 2');
	t.equal(round(1.9), 2, 'round(1.9) === 2');

	t.end();
});

test('sign', function (t) {
	t.equal(sign(-1), -1, 'sign(-1) === -1');
	t.equal(sign(+1), +1, 'sign(+1) === +1');
	t.equal(sign(+0), +0, 'sign(+0) === +0');
	t.equal(sign(-0), -0, 'sign(-0) === -0');
	t.equal(sign(NaN), NaN, 'sign(NaN) === NaN');
	t.equal(sign(Infinity), +1, 'sign(Infinity) === +1');
	t.equal(sign(-Infinity), -1, 'sign(-Infinity) === -1');
	t.equal(sign(maxValue), +1, 'sign(maxValue) === +1');
	t.equal(sign(maxSafeInteger), +1, 'sign(maxSafeInteger) === +1');

	t.end();
});

test('constants', function (t) {
	t.equal(typeof maxArrayLength, 'number', 'typeof maxArrayLength === "number"');
	t.equal(typeof maxSafeInteger, 'number', 'typeof maxSafeInteger === "number"');
	t.equal(typeof maxValue, 'number', 'typeof maxValue === "number"');

	t.end();
});
