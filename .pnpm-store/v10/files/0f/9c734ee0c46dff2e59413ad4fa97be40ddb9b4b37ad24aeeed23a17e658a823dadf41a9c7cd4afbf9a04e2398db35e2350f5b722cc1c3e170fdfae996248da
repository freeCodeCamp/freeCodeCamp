'use strict';

var test = require('tape');
var typedArrayByteLength = require('../');
var isCallable = require('is-callable');
var generators = require('make-generator-function')();
var arrowFn = require('make-arrow-function')();
var forEach = require('for-each');
var inspect = require('object-inspect');
var availableTypedArrays = require('available-typed-arrays')();

test('not arrays', function (t) {
	t.test('non-number/string primitives', function (st) {
		// @ts-expect-error
		st.equal(false, typedArrayByteLength(), 'undefined is not typed array');
		st.equal(false, typedArrayByteLength(null), 'null is not typed array');
		st.equal(false, typedArrayByteLength(false), 'false is not typed array');
		st.equal(false, typedArrayByteLength(true), 'true is not typed array');
		st.end();
	});

	t.equal(false, typedArrayByteLength({}), 'object is not typed array');
	t.equal(false, typedArrayByteLength(/a/g), 'regex literal is not typed array');
	t.equal(false, typedArrayByteLength(new RegExp('a', 'g')), 'regex object is not typed array');
	t.equal(false, typedArrayByteLength(new Date()), 'new Date() is not typed array');

	t.test('numbers', function (st) {
		st.equal(false, typedArrayByteLength(42), 'number is not typed array');
		st.equal(false, typedArrayByteLength(Object(42)), 'number object is not typed array');
		st.equal(false, typedArrayByteLength(NaN), 'NaN is not typed array');
		st.equal(false, typedArrayByteLength(Infinity), 'Infinity is not typed array');
		st.end();
	});

	t.test('strings', function (st) {
		st.equal(false, typedArrayByteLength('foo'), 'string primitive is not typed array');
		st.equal(false, typedArrayByteLength(Object('foo')), 'string object is not typed array');
		st.end();
	});

	t.end();
});

test('Functions', function (t) {
	t.equal(false, typedArrayByteLength(function () {}), 'function is not typed array');
	t.end();
});

test('Generators', { skip: generators.length === 0 }, function (t) {
	forEach(generators, function (genFn) {
		t.equal(false, typedArrayByteLength(genFn), 'generator function ' + inspect(genFn) + ' is not typed array');
	});
	t.end();
});

test('Arrow functions', { skip: !arrowFn }, function (t) {
	t.equal(false, typedArrayByteLength(arrowFn), 'arrow function is not typed array');
	t.end();
});

test('Typed Arrays', { skip: availableTypedArrays.length === 0 }, function (t) {
	var length = 64;
	var byteLength = 32;

	forEach(availableTypedArrays, function (typedArray) {
		var buffer = new ArrayBuffer(length);
		var TypedArray = global[typedArray];
		if (isCallable(TypedArray)) {
			// @ts-expect-error TS doesn't seem to know about the second TA arg
			var arr = new TypedArray(buffer, byteLength);
			t.equal(typedArrayByteLength(arr), byteLength, 'new ' + typedArray + '(new ArrayBuffer(' + length + '), ' + byteLength + ') is typed array of byte Length ' + byteLength);
		} else {
			t.comment('# SKIP ' + typedArray + ' is not supported');
		}
	});

	var buffer = new ArrayBuffer(8);
	var uint8 = new Uint8Array(buffer, 2);

	t.equal(typedArrayByteLength(uint8), 6, 'byteLength is as expected');

	t.end();
});
