'use strict';

var test = require('tape');
var typedArrayLength = require('../');
var isCallable = require('is-callable');
var generators = require('make-generator-function')();
var arrowFn = require('make-arrow-function')();
var forEach = require('for-each');
var inspect = require('object-inspect');
var typedArrayNames = require('possible-typed-array-names');

test('not arrays', function (t) {
	t.test('non-number/string primitives', function (st) {
		// @ts-expect-error
		st.equal(false, typedArrayLength(), 'undefined is not typed array');
		st.equal(false, typedArrayLength(null), 'null is not typed array');
		st.equal(false, typedArrayLength(false), 'false is not typed array');
		st.equal(false, typedArrayLength(true), 'true is not typed array');
		st.end();
	});

	t.equal(false, typedArrayLength({}), 'object is not typed array');
	t.equal(false, typedArrayLength(/a/g), 'regex literal is not typed array');
	t.equal(false, typedArrayLength(new RegExp('a', 'g')), 'regex object is not typed array');
	t.equal(false, typedArrayLength(new Date()), 'new Date() is not typed array');

	t.test('numbers', function (st) {
		st.equal(false, typedArrayLength(42), 'number is not typed array');
		st.equal(false, typedArrayLength(Object(42)), 'number object is not typed array');
		st.equal(false, typedArrayLength(NaN), 'NaN is not typed array');
		st.equal(false, typedArrayLength(Infinity), 'Infinity is not typed array');
		st.end();
	});

	t.test('strings', function (st) {
		st.equal(false, typedArrayLength('foo'), 'string primitive is not typed array');
		st.equal(false, typedArrayLength(Object('foo')), 'string object is not typed array');
		st.end();
	});

	t.end();
});

test('Functions', function (t) {
	t.equal(false, typedArrayLength(function () {}), 'function is not typed array');
	t.end();
});

test('Generators', { skip: generators.length === 0 }, function (t) {
	forEach(generators, function (genFn) {
		t.equal(false, typedArrayLength(genFn), 'generator function ' + inspect(genFn) + ' is not typed array');
	});
	t.end();
});

test('Arrow functions', { skip: !arrowFn }, function (t) {
	t.equal(false, typedArrayLength(arrowFn), 'arrow function is not typed array');
	t.end();
});

test('Typed Arrays', function (t) {
	forEach(typedArrayNames, function (typedArray) {
		/** @type {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor | BigInt64ArrayConstructor | BigUint64ArrayConstructor} */
		var TypedArray = global[typedArray];
		if (isCallable(TypedArray)) {
			var length = 10;
			var arr = new TypedArray(length);
			t.equal(typedArrayLength(arr), length, 'new ' + typedArray + '(10) is typed array of length ' + length);
		} else {
			t.comment('# SKIP ' + typedArray + ' is not supported');
		}
	});
	t.end();
});
