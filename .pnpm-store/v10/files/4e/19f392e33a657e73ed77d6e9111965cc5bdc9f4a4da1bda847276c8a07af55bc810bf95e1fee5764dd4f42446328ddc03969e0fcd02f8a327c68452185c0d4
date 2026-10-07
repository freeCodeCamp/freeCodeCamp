'use strict';

var test = require('tape');
var typedArrayByteOffset = require('../');
var isCallable = require('is-callable');
var generators = require('make-generator-function')();
var arrowFn = require('make-arrow-function')();
var forEach = require('for-each');
var inspect = require('object-inspect');

var typedArrayNames = require('possible-typed-array-names');

test('not arrays', function (t) {
	t.test('non-number/string primitives', function (st) {
		// @ts-expect-error
		st.equal(false, typedArrayByteOffset(), 'undefined is not typed array');
		st.equal(false, typedArrayByteOffset(null), 'null is not typed array');
		st.equal(false, typedArrayByteOffset(false), 'false is not typed array');
		st.equal(false, typedArrayByteOffset(true), 'true is not typed array');
		st.end();
	});

	t.equal(false, typedArrayByteOffset({}), 'object is not typed array');
	t.equal(false, typedArrayByteOffset(/a/g), 'regex literal is not typed array');
	t.equal(false, typedArrayByteOffset(new RegExp('a', 'g')), 'regex object is not typed array');
	t.equal(false, typedArrayByteOffset(new Date()), 'new Date() is not typed array');

	t.test('numbers', function (st) {
		st.equal(false, typedArrayByteOffset(42), 'number is not typed array');
		st.equal(false, typedArrayByteOffset(Object(42)), 'number object is not typed array');
		st.equal(false, typedArrayByteOffset(NaN), 'NaN is not typed array');
		st.equal(false, typedArrayByteOffset(Infinity), 'Infinity is not typed array');
		st.end();
	});

	t.test('strings', function (st) {
		st.equal(false, typedArrayByteOffset('foo'), 'string primitive is not typed array');
		st.equal(false, typedArrayByteOffset(Object('foo')), 'string object is not typed array');
		st.end();
	});

	t.end();
});

test('Functions', function (t) {
	t.equal(false, typedArrayByteOffset(function () {}), 'function is not typed array');
	t.end();
});

test('Generators', { skip: generators.length === 0 }, function (t) {
	forEach(generators, function (genFn) {
		t.equal(false, typedArrayByteOffset(genFn), 'generator function ' + inspect(genFn) + ' is not typed array');
	});
	t.end();
});

test('Arrow functions', { skip: !arrowFn }, function (t) {
	t.equal(false, typedArrayByteOffset(arrowFn), 'arrow function is not typed array');
	t.end();
});

test('Typed Arrays', function (t) {
	var length = 32;
	var byteOffset = 16;

	forEach(typedArrayNames, function (typedArray) {
		var buffer = new ArrayBuffer(length);
		var TypedArray = global[typedArray];
		if (isCallable(TypedArray)) {
			// @ts-expect-error hush, TS, TAs can take an optional byte offset arg
			var arr = new TypedArray(buffer, byteOffset);
			t.equal(typedArrayByteOffset(arr), byteOffset, 'new ' + typedArray + '(new ArrayBuffer(' + length + '), ' + byteOffset + ') is typed array of byte offset ' + byteOffset);
		} else {
			t.comment('# SKIP ' + typedArray + ' is not supported');
		}
	});
	t.end();
});
