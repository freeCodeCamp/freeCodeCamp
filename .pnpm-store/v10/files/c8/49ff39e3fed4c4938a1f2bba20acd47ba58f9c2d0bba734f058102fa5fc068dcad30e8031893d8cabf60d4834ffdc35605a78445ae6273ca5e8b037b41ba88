'use strict';

var test = require('tape');
var toPrimitive = require('../es6');
var is = require('object-is');
var forEach = require('for-each');
var functionName = require('function.prototype.name');
var debug = require('object-inspect');
var v = require('es-value-fixtures');

/** @typedef {{ toString?: unknown, valueOf?: unknown, [Symbol.toPrimitive]?: unknown }} Coercible */

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
	var objectSym = Object(primitiveSym);
	t.equal(toPrimitive(objectSym), primitiveSym, 'toPrimitive(' + debug(objectSym) + ') returns ' + debug(primitiveSym));
	t.equal(toPrimitive(objectSym, String), primitiveSym, 'toPrimitive(' + debug(objectSym) + ', String) returns ' + debug(primitiveSym));
	t.equal(toPrimitive(objectSym, Number), primitiveSym, 'toPrimitive(' + debug(objectSym) + ', Number) returns ' + debug(primitiveSym));
	t.end();
});

test('Arrays', function (t) {
	var arrays = [[], ['a', 'b'], [1, 2]];
	forEach(arrays, function (arr) {
		t.equal(toPrimitive(arr), String(arr), 'toPrimitive(' + debug(arr) + ') returns the string version of the array');
		t.equal(toPrimitive(arr, String), String(arr), 'toPrimitive(' + debug(arr) + ') returns the string version of the array');
		t.equal(toPrimitive(arr, Number), String(arr), 'toPrimitive(' + debug(arr) + ') returns the string version of the array');
	});
	t.end();
});

test('Dates', function (t) {
	var dates = [new Date(), new Date(0), new Date(NaN)];
	forEach(dates, function (date) {
		t.equal(toPrimitive(date), String(date), 'toPrimitive(' + debug(date) + ') returns the string version of the date');
		t.equal(toPrimitive(date, String), String(date), 'toPrimitive(' + debug(date) + ') returns the string version of the date');
		t.ok(is(toPrimitive(date, Number), Number(date)), 'toPrimitive(' + debug(date) + ') returns the number version of the date');
	});
	t.end();
});

test('Objects', function (t) {
	t.equal(toPrimitive(v.coercibleObject), v.coercibleObject.valueOf(), 'coercibleObject with no hint coerces to valueOf');
	t.equal(toPrimitive(v.coercibleObject, Number), v.coercibleObject.valueOf(), 'coercibleObject with hint Number coerces to valueOf');
	t.equal(toPrimitive(v.coercibleObject, String), v.coercibleObject.toString(), 'coercibleObject with hint String coerces to non-stringified toString');

	t.equal(toPrimitive(v.coercibleFnObject), v.coercibleFnObject.toString(), 'coercibleFnObject coerces to non-stringified toString');
	t.equal(toPrimitive(v.coercibleFnObject, Number), v.coercibleFnObject.toString(), 'coercibleFnObject with hint Number coerces to non-stringified toString');
	t.equal(toPrimitive(v.coercibleFnObject, String), v.coercibleFnObject.toString(), 'coercibleFnObject with hint String coerces to non-stringified toString');

	t.equal(toPrimitive({}), '[object Object]', '{} with no hint coerces to Object#toString');
	t.equal(toPrimitive({}, Number), '[object Object]', '{} with hint Number coerces to Object#toString');
	t.equal(toPrimitive({}, String), '[object Object]', '{} with hint String coerces to Object#toString');

	t.equal(toPrimitive(v.toStringOnlyObject), v.toStringOnlyObject.toString(), 'toStringOnlyObject returns non-stringified toString');
	t.equal(toPrimitive(v.toStringOnlyObject, Number), v.toStringOnlyObject.toString(), 'toStringOnlyObject with hint Number returns non-stringified toString');
	t.equal(toPrimitive(v.toStringOnlyObject, String), v.toStringOnlyObject.toString(), 'toStringOnlyObject with hint String returns non-stringified toString');

	t.equal(toPrimitive(v.valueOfOnlyObject), v.valueOfOnlyObject.valueOf(), 'valueOfOnlyObject returns valueOf');
	t.equal(toPrimitive(v.valueOfOnlyObject, Number), v.valueOfOnlyObject.valueOf(), 'valueOfOnlyObject with hint Number returns valueOf');
	t.equal(toPrimitive(v.valueOfOnlyObject, String), v.valueOfOnlyObject.valueOf(), 'valueOfOnlyObject with hint String returns non-stringified valueOf');

	t.test('Symbol.toPrimitive', { skip: !v.hasSymbols || !Symbol.toPrimitive }, function (st) {
		/** @type {Coercible} */
		var overriddenObject = { toString: st.fail, valueOf: st.fail };
		overriddenObject[Symbol.toPrimitive] = /** @type {(hint: string) => unknown} */ function (hint) {
			return String(hint);
		};

		st.equal(toPrimitive(overriddenObject), 'default', 'object with Symbol.toPrimitive + no hint invokes that');
		st.equal(toPrimitive(overriddenObject, Number), 'number', 'object with Symbol.toPrimitive + hint Number invokes that');
		st.equal(toPrimitive(overriddenObject, String), 'string', 'object with Symbol.toPrimitive + hint String invokes that');

		/** @type {Coercible} */
		var nullToPrimitive = { toString: v.coercibleObject.toString, valueOf: v.coercibleObject.valueOf };
		nullToPrimitive[Symbol.toPrimitive] = null;
		st.equal(toPrimitive(nullToPrimitive), toPrimitive(v.coercibleObject), 'object with no hint + null Symbol.toPrimitive ignores it');
		st.equal(toPrimitive(nullToPrimitive, Number), toPrimitive(v.coercibleObject, Number), 'object with hint Number + null Symbol.toPrimitive ignores it');
		st.equal(toPrimitive(nullToPrimitive, String), toPrimitive(v.coercibleObject, String), 'object with hint String + null Symbol.toPrimitive ignores it');

		st.test('exceptions', function (sst) {
			/** @type {Coercible} */
			var nonFunctionToPrimitive = { toString: sst.fail, valueOf: sst.fail };
			nonFunctionToPrimitive[Symbol.toPrimitive] = {};
			sst['throws'](toPrimitive.bind(null, nonFunctionToPrimitive), TypeError, 'Symbol.toPrimitive returning a non-function throws');

			/** @type {Coercible} */
			var uncoercibleToPrimitive = { toString: sst.fail, valueOf: sst.fail };
			uncoercibleToPrimitive[Symbol.toPrimitive] = /** @type {(hint: string) => unknown} */ function (hint) {
				return { toString: function () { return hint; } };
			};
			sst['throws'](toPrimitive.bind(null, uncoercibleToPrimitive), TypeError, 'Symbol.toPrimitive returning an object throws');

			/** @type {Coercible} */
			var throwingToPrimitive = { toString: sst.fail, valueOf: sst.fail };
			throwingToPrimitive[Symbol.toPrimitive] = /** @type {(hint: string) => unknown} */ function (hint) {
				throw new RangeError(hint);
			};
			sst['throws'](toPrimitive.bind(null, throwingToPrimitive), RangeError, 'Symbol.toPrimitive throwing throws');

			sst.end();
		});

		st.end();
	});

	t.test('exceptions', function (st) {
		st['throws'](toPrimitive.bind(null, v.uncoercibleObject), TypeError, 'uncoercibleObject throws a TypeError');
		st['throws'](toPrimitive.bind(null, v.uncoercibleObject, Number), TypeError, 'uncoercibleObject with hint Number throws a TypeError');
		st['throws'](toPrimitive.bind(null, v.uncoercibleObject, String), TypeError, 'uncoercibleObject with hint String throws a TypeError');

		st['throws'](toPrimitive.bind(null, v.uncoercibleFnObject), TypeError, 'uncoercibleFnObject throws a TypeError');
		st['throws'](toPrimitive.bind(null, v.uncoercibleFnObject, Number), TypeError, 'uncoercibleFnObject with hint Number throws a TypeError');
		st['throws'](toPrimitive.bind(null, v.uncoercibleFnObject, String), TypeError, 'uncoercibleFnObject with hint String throws a TypeError');
		st.end();
	});
	t.end();
});
