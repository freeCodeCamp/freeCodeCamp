'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var assign = require('object.assign');
var forEach = require('for-each');
var arrows = require('make-arrow-function').list();
var generators = require('make-generator-function')();
var asyncs = require('make-async-function').list();
var hasSymbols = require('has-symbols')();
var hasToStringTag = require('has-tostringtag/shams')();
var hasBigInts = require('has-bigints')();
var availableTypedArrays = require('available-typed-arrays');

var which = require('../');

if (typeof process !== 'undefined') {
	process.on('unhandledRejection', function () {});
}

test('nullish', function (t) {
	t.equal(which(null), null, 'null is null');
	t.equal(which(undefined), undefined, 'undefined is undefined');
	// @ts-expect-error
	t.equal(which(), undefined, 'absent is undefined');

	t.end();
});

test('non-nullish', function (t) {
	/** @constructor */
	var F = function Foo() {};

	var tests = {
		Number: [
			0,
			-0,
			42,
			Infinity,
			-Infinity,
			NaN,
			0.5
		],
		Boolean: [
			true,
			false
		],
		String: [
			'',
			'foo'
		],
		Date: [
			new Date(),
			new Date(NaN),
			assign(new Date(), { constructor: Object })
		],
		RegExp: [
			/(?:)/,
			/a/g,
			assign(/constructor/, { constructor: Object })
		],
		Array: [
			[],
			[42],
			assign([], { constructor: Object })
		],
		Function: [
			function () {},
			function f() {},
			assign(function constructor() {}, { constructor: Object })
		].concat(arrows),
		GeneratorFunction: generators,
		AsyncFunction: asyncs,
		// eslint-disable-next-line no-extra-parens
		Object: /** @type {object[]} */ ([
			{},
			{ constructor: null },
			Math
		]),
		Symbol: hasSymbols ? [
			Symbol.iterator,
			Symbol(),
			Symbol('foo'),
			Symbol['for'] ? Symbol['for']('bar') : Symbol('no "for" support') // eslint-disable-line no-restricted-properties
		] : [],
		BigInt: hasBigInts ? [
			BigInt(0),
			BigInt(42)
		] : [],
		Foo: [
			new F()
		],
		Map: typeof Map === 'function' ? [
			new Map(),
			new Map([[1, 2], [3, 4]]),
			assign(new Map(), { constructor: Object })
		] : [],
		WeakMap: typeof WeakMap === 'function' ? [
			new WeakMap(),
			assign(new WeakMap(), { constructor: Object })
		] : [],
		Set: typeof Set === 'function' ? [
			new Set(),
			new Set([1, 2, 3, 4]),
			assign(new Set(), { constructor: Object })
		] : [],
		WeakSet: typeof WeakSet === 'function' ? [
			new WeakSet(),
			assign(new WeakSet(), { constructor: Object })
		] : [],
		WeakRef: typeof WeakRef === 'function' ? [
			new WeakRef({}),
			assign(new WeakRef({}), { constructor: Object })
		] : [],
		FinalizationRegistry: typeof FinalizationRegistry === 'function' ? [
			new FinalizationRegistry(function () {}),
			assign(new FinalizationRegistry(function () {}), { constructor: Object })
		] : [],
		Promise: typeof Promise === 'function' ? [
			Promise.resolve(42),
			Promise.reject(NaN),
			new Promise(function () {})
		] : []
	};
	forEach(availableTypedArrays(), function (TypedArray) {
		// @ts-expect-error not sure how to infer this as being spreaded into the above object literal
		tests[TypedArray] = [
			new global[TypedArray](0),
			new global[TypedArray](2)
		];
	});
	forEach(tests, function (values, expected) {
		forEach(values, function (value) {
			t.equal(which(value), expected, inspect(value) + ' is ' + inspect(expected));
			var obj = Object(value);
			if (value !== obj) {
				t.equal(which(obj), expected, inspect(obj) + ' is ' + inspect(expected));
			}
			if (
				expected !== 'Object' // the fallback can't fall back
				&& expected !== 'Foo' // not a builtin
			) {
				if (hasToStringTag) {
					/** @type {{ [k in typeof Symbol.toStringTag]?: string }} */
					var fakerTag = {};
					fakerTag[Symbol.toStringTag] = expected;
					t.equal(
						which(fakerTag),
						'Object',
						inspect(fakerTag) + ' lies and claims it is a ' + expected + ', but instead it is Object'
					);
				}

				/** @typedef {Exclude<typeof expected, 'GeneratorFunction' | 'AsyncFunction' | 'Foo'>} GlobalKey */

				var fakerConstructor = {
					// eslint-disable-next-line no-extra-parens
					constructor: global[/** @type {GlobalKey} */ (expected)] || tests[expected]
				};
				t.equal(
					which(fakerConstructor),
					'Object',
					inspect(fakerConstructor) + ' lies and claims it is a ' + expected + ', but instead it is Object'
				);

				if (hasToStringTag) {
					/** @type {{ constructor: Function } & { [k in typeof Symbol.toStringTag]?: string }} */
					var fakerConstructorTag = {
						// eslint-disable-next-line no-extra-parens
						constructor: global[/** @type {GlobalKey} */ (expected)] || tests[expected]
					};
					fakerConstructorTag[Symbol.toStringTag] = expected;
					t.equal(
						which(fakerConstructorTag),
						'Object',
						inspect(fakerConstructorTag) + ' lies with a tag and claims it is a ' + expected + ', but instead it is Object'
					);
				}
			}
		});
	});

	t.end();
});
