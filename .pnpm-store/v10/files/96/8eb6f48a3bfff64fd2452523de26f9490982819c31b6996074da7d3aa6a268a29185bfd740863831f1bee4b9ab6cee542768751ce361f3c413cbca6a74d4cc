'use strict';

var test = require('tape');
var toPrimitive = require('../es5');
var is = require('object-is');
var forEach = require('for-each');
var functionName = require('function.prototype.name');
var debug = require('object-inspect');
var v = require('es-value-fixtures');

test('function properties', function (t) {
	t.equal(toPrimitive.length, 1, 'length is 1');
	t.equal(functionName(toPrimitive), 'ToPrimitive', 'name is ToPrimitive');

	t.end();
});

test('primitives', function (t) {
	forEach(v.primitives, function (i) {
		t.ok(is(toPrimitive(i), i), 'toPrimitive(' + debug(i) + ') returns the same value');
		t.ok(is(toPrimitive(i, String), i), 'toPrimitive(' + debug(i) + ', String) returns the same value');
		t.ok(is(toPrimitive(i, Number), i), 'toPrimitive(' + debug(i) + ', Number) returns the same value');
	});
	t.end();
});

test('Symbols', { skip: !v.hasSymbols }, function (t) {
	forEach(v.symbols, function (sym) {
		t.equal(toPrimitive(sym), sym, 'toPrimitive(' + debug(sym) + ') returns the same value');
		t.equal(toPrimitive(sym, String), sym, 'toPrimitive(' + debug(sym) + ', String) returns the same value');
		t.equal(toPrimitive(sym, Number), sym, 'toPrimitive(' + debug(sym) + ', Number) returns the same value');
	});

	var primitiveSym = Symbol('primitiveSym');
	var stringSym = Symbol.prototype.toString.call(primitiveSym);
	var objectSym = Object(primitiveSym);
	t.equal(toPrimitive(objectSym), primitiveSym, 'toPrimitive(' + debug(objectSym) + ') returns ' + debug(primitiveSym));

	// This is different from ES2015, as the ES5 algorithm doesn't account for the existence of Symbols:
	t.equal(toPrimitive(objectSym, String), stringSym, 'toPrimitive(' + debug(objectSym) + ', String) returns ' + debug(stringSym));
	t.equal(toPrimitive(objectSym, Number), primitiveSym, 'toPrimitive(' + debug(objectSym) + ', Number) returns ' + debug(primitiveSym));
	t.end();
});

test('Arrays', function (t) {
	var arrays = [[], ['a', 'b'], [1, 2]];
	forEach(arrays, function (arr) {
		t.ok(is(toPrimitive(arr), arr.toString()), 'toPrimitive(' + debug(arr) + ') returns toString of the array');
		t.equal(toPrimitive(arr, String), arr.toString(), 'toPrimitive(' + debug(arr) + ') returns toString of the array');
		t.ok(is(toPrimitive(arr, Number), arr.toString()), 'toPrimitive(' + debug(arr) + ') returns toString of the array');
	});
	t.end();
});

test('Dates', function (t) {
	var dates = [new Date(), new Date(0), new Date(NaN)];
	forEach(dates, function (date) {
		t.equal(toPrimitive(date), date.toString(), 'toPrimitive(' + debug(date) + ') returns toString of the date');
		t.equal(toPrimitive(date, String), date.toString(), 'toPrimitive(' + debug(date) + ') returns toString of the date');
		t.ok(is(toPrimitive(date, Number), date.valueOf()), 'toPrimitive(' + debug(date) + ') returns valueOf of the date');
	});
	t.end();
});

test('Objects', function (t) {
	t.equal(toPrimitive(v.coercibleObject), v.coercibleObject.valueOf(), 'coercibleObject with no hint coerces to valueOf');
	t.equal(toPrimitive(v.coercibleObject, String), v.coercibleObject.toString(), 'coercibleObject with hint String coerces to toString');
	t.equal(toPrimitive(v.coercibleObject, Number), v.coercibleObject.valueOf(), 'coercibleObject with hint Number coerces to valueOf');

	t.equal(toPrimitive(v.coercibleFnObject), v.coercibleFnObject.toString(), 'coercibleFnObject coerces to toString');
	t.equal(toPrimitive(v.coercibleFnObject, String), v.coercibleFnObject.toString(), 'coercibleFnObject with hint String coerces to toString');
	t.equal(toPrimitive(v.coercibleFnObject, Number), v.coercibleFnObject.toString(), 'coercibleFnObject with hint Number coerces to toString');

	t.ok(is(toPrimitive({}), '[object Object]'), '{} with no hint coerces to Object#toString');
	t.equal(toPrimitive({}, String), '[object Object]', '{} with hint String coerces to Object#toString');
	t.ok(is(toPrimitive({}, Number), '[object Object]'), '{} with hint Number coerces to Object#toString');

	t.equal(toPrimitive(v.toStringOnlyObject), v.toStringOnlyObject.toString(), 'toStringOnlyObject returns toString');
	t.equal(toPrimitive(v.toStringOnlyObject, String), v.toStringOnlyObject.toString(), 'toStringOnlyObject with hint String returns toString');
	t.equal(toPrimitive(v.toStringOnlyObject, Number), v.toStringOnlyObject.toString(), 'toStringOnlyObject with hint Number returns toString');

	t.equal(toPrimitive(v.valueOfOnlyObject), v.valueOfOnlyObject.valueOf(), 'valueOfOnlyObject returns valueOf');
	t.equal(toPrimitive(v.valueOfOnlyObject, String), v.valueOfOnlyObject.valueOf(), 'valueOfOnlyObject with hint String returns valueOf');
	t.equal(toPrimitive(v.valueOfOnlyObject, Number), v.valueOfOnlyObject.valueOf(), 'valueOfOnlyObject with hint Number returns valueOf');

	t.test('exceptions', function (st) {
		st['throws'](toPrimitive.bind(null, v.uncoercibleObject), TypeError, 'uncoercibleObject throws a TypeError');
		st['throws'](toPrimitive.bind(null, v.uncoercibleObject, String), TypeError, 'uncoercibleObject with hint String throws a TypeError');
		st['throws'](toPrimitive.bind(null, v.uncoercibleObject, Number), TypeError, 'uncoercibleObject with hint Number throws a TypeError');

		st['throws'](toPrimitive.bind(null, v.uncoercibleFnObject), TypeError, 'uncoercibleFnObject throws a TypeError');
		st['throws'](toPrimitive.bind(null, v.uncoercibleFnObject, String), TypeError, 'uncoercibleFnObject with hint String throws a TypeError');
		st['throws'](toPrimitive.bind(null, v.uncoercibleFnObject, Number), TypeError, 'uncoercibleFnObject with hint Number throws a TypeError');
		st.end();
	});

	t.end();
});
