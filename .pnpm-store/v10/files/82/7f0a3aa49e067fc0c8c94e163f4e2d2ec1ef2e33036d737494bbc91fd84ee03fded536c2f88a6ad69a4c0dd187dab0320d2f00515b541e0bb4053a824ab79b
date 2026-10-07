'use strict';

var test = require('tape');
var isTypedArray = require('../');
var isCallable = require('is-callable');
var hasToStringTag = require('has-tostringtag/shams')();
var generators = require('make-generator-function')();
var arrowFn = require('make-arrow-function')();
var forEach = require('for-each');
var inspect = require('object-inspect');

var typedArrayNames = [
	'Int8Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Int16Array',
	'Uint16Array',
	'Int32Array',
	'Uint32Array',
	'Float32Array',
	'Float64Array',
	'BigInt64Array',
	'BigUint64Array'
];

test('not arrays', function (t) {
	t.test('non-number/string primitives', function (st) {
		// @ts-expect-error Expected 1 arguments, but got 0.ts(2554)
		st.notOk(isTypedArray(), 'undefined is not typed array');
		st.notOk(isTypedArray(null), 'null is not typed array');
		st.notOk(isTypedArray(false), 'false is not typed array');
		st.notOk(isTypedArray(true), 'true is not typed array');
		st.end();
	});

	t.notOk(isTypedArray({}), 'object is not typed array');
	t.notOk(isTypedArray(/a/g), 'regex literal is not typed array');
	t.notOk(isTypedArray(new RegExp('a', 'g')), 'regex object is not typed array');
	t.notOk(isTypedArray(new Date()), 'new Date() is not typed array');

	t.test('numbers', function (st) {
		st.notOk(isTypedArray(42), 'number is not typed array');
		st.notOk(isTypedArray(Object(42)), 'number object is not typed array');
		st.notOk(isTypedArray(NaN), 'NaN is not typed array');
		st.notOk(isTypedArray(Infinity), 'Infinity is not typed array');
		st.end();
	});

	t.test('strings', function (st) {
		st.notOk(isTypedArray('foo'), 'string primitive is not typed array');
		st.notOk(isTypedArray(Object('foo')), 'string object is not typed array');
		st.end();
	});

	t.end();
});

test('Functions', function (t) {
	t.notOk(isTypedArray(function () {}), 'function is not typed array');
	t.end();
});

test('Generators', { skip: generators.length === 0 }, function (t) {
	forEach(generators, function (genFn) {
		t.notOk(isTypedArray(genFn), 'generator function ' + inspect(genFn) + ' is not typed array');
	});
	t.end();
});

test('Arrow functions', { skip: !arrowFn }, function (t) {
	t.notOk(isTypedArray(arrowFn), 'arrow function is not typed array');
	t.end();
});

test('@@toStringTag', { skip: !hasToStringTag }, function (t) {
	forEach(typedArrayNames, function (typedArray) {
		// @ts-expect-error
		if (typeof global[typedArray] === 'function') {
			// @ts-expect-error
			var fakeTypedArray = [];
			// @ts-expect-error
			fakeTypedArray[Symbol.toStringTag] = typedArray;
			// @ts-expect-error
			t.notOk(isTypedArray(fakeTypedArray), 'faked ' + typedArray + ' is not typed array');
		} else {
			t.comment('# SKIP ' + typedArray + ' is not supported');
		}
	});
	t.end();
});

test('non-Typed Arrays', function (t) {
	t.notOk(isTypedArray([]), '[] is not typed array');
	t.end();
});

/** @typedef {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor | BigInt64ArrayConstructor | BigUint64ArrayConstructor} TypedArrayConstructor */

test('Typed Arrays', function (t) {
	forEach(typedArrayNames, function (typedArray) {
		// @ts-expect-error
		/** @type {TypedArrayConstructor} */ var TypedArray = global[typedArray];
		if (isCallable(TypedArray)) {
			var arr = new TypedArray(10);
			t.ok(isTypedArray(arr), 'new ' + typedArray + '(10) is typed array');
		} else {
			t.comment('# SKIP ' + typedArray + ' is not supported');
		}
	});
	t.end();
});
