'use strict';

var test = require('tape');
var mockProperty = require('mock-property');
var hasSymbols = require('has-symbols/shams')();
var isConcatSpreadable = hasSymbols && Symbol.isConcatSpreadable;
var species = hasSymbols && Symbol.species;

var boundFnsHaveConfigurableLengths = require('set-function-length/env').boundFnsHaveConfigurableLengths;

var safeConcat = require('../');

test('safe-array-concat', function (t) {
	t.equal(typeof safeConcat, 'function', 'is a function');
	t.equal(
		safeConcat.length,
		boundFnsHaveConfigurableLengths ? 1 : 0,
		'has a length of ' + (boundFnsHaveConfigurableLengths ? 1 : '0 (function lengths are not configurable)')
	);

	t.deepEqual(
		// eslint-disable-next-line no-extra-parens
		safeConcat(/** @type {(string | number | number[])[]} */ ([1, 2]), [3, 4], 'foo', 5, 6, [[7]]),
		[1, 2, 3, 4, 'foo', 5, 6, [7]],
		'works with flat and nested arrays'
	);

	t.deepEqual(
		safeConcat(undefined, 1, 2),
		[undefined, 1, 2],
		'first item as undefined is not the concat receiver, which would throw via ToObject'
	);
	t.deepEqual(
		safeConcat(null, 1, 2),
		[null, 1, 2],
		'first item as null is not the concat receiver, which would throw via ToObject'
	);

	var arr = [1, 2];
	arr.constructor = function C() {
		return { args: arguments };
	};
	t.deepEqual(
		safeConcat(arr, 3, 4),
		[1, 2, 3, 4],
		'first item as an array with a nonArray .constructor; ignores constructor'
	);

	t.test('has Symbol.species', { skip: !species }, function (st) {
		var speciesArr = [1, 2];
		// @ts-expect-error ts(2740) TS's `constructor` type requires a function
		speciesArr.constructor = {};
		// @ts-expect-error ts(2538) TS can't type narrow from tape's `skip`
		speciesArr.constructor[species] = function Species() {
			return { args: arguments };
		};

		st.deepEqual(
			safeConcat(speciesArr, 3, 4),
			[1, 2, 3, 4],
			'first item as an array with a .constructor object with a Symbol.species; ignores constructor and species'
		);

		st.end();
	});

	t.test('has isConcatSpreadable', { skip: !isConcatSpreadable }, function (st) {
		// TS can't type narrow from tape's `skip`
		if (isConcatSpreadable) {
			st.teardown(mockProperty(
				// eslint-disable-next-line no-extra-parens
				/** @type {Record<PropertyKey, unknown>} */ (/** @type {unknown} */ (String.prototype)),
				isConcatSpreadable,
				{ value: true }
			));

			var nonSpreadable = [1, 2];
			// @ts-expect-error ts(7015) TS can't handle expandos on an array
			nonSpreadable[isConcatSpreadable] = false;

			st.deepEqual(
				safeConcat(nonSpreadable, 3, 4, 'foo', Object('bar')),
				[1, 2, 3, 4, 'foo', Object('bar')],
				'a non-concat-spreadable array is spreaded, and a concat-spreadable String is not spreaded'
			);

			st.teardown(mockProperty(Array.prototype, isConcatSpreadable, { value: false }));

			st.deepEqual(
				safeConcat([1, 2], 3, 4, 'foo', Object('bar')),
				[1, 2, 3, 4, 'foo', Object('bar')],
				'all arrays marked non-concat-spreadable are still spreaded, and a concat-spreadable String is not spreaded'
			);
		}

		st.end();
	});

	t.end();
});
