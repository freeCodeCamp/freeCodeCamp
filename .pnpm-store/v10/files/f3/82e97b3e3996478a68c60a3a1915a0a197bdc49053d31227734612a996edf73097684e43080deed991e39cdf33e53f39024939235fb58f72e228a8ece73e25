'use strict';

var callBind = require('../');
var hasStrictMode = require('has-strict-mode')();
var forEach = require('for-each');
var inspect = require('object-inspect');
var v = require('es-value-fixtures');

var test = require('tape');

test('callBindBasic', function (t) {
	forEach(v.nonFunctions, function (nonFunction) {
		t['throws'](
			// @ts-expect-error
			function () { callBind([nonFunction]); },
			TypeError,
			inspect(nonFunction) + ' is not a function'
		);
	});

	var sentinel = { sentinel: true };
	/** @type {<T, A extends number, B extends number>(this: T, a: A, b: B) => [T | undefined, A, B]} */
	var func = function (a, b) {
		// eslint-disable-next-line no-invalid-this
		return [!hasStrictMode && this === global ? undefined : this, a, b];
	};
	t.equal(func.length, 2, 'original function length is 2');

	/** type {(thisArg: unknown, a: number, b: number) => [unknown, number, number]} */
	var bound = callBind([func]);
	/** type {((a: number, b: number) => [typeof sentinel, typeof a, typeof b])} */
	var boundR = callBind([func, sentinel]);
	/** type {((b: number) => [typeof sentinel, number, typeof b])} */
	var boundArg = callBind([func, sentinel, /** @type {const} */ (1)]);

	// @ts-expect-error
	t.deepEqual(bound(), [undefined, undefined, undefined], 'bound func with no args');

	// @ts-expect-error
	t.deepEqual(func(), [undefined, undefined, undefined], 'unbound func with too few args');
	// @ts-expect-error
	t.deepEqual(bound(1, 2), [hasStrictMode ? 1 : Object(1), 2, undefined], 'bound func too few args');
	// @ts-expect-error
	t.deepEqual(boundR(), [sentinel, undefined, undefined], 'bound func with receiver, with too few args');
	// @ts-expect-error
	t.deepEqual(boundArg(), [sentinel, 1, undefined], 'bound func with receiver and arg, with too few args');

	t.deepEqual(func(1, 2), [undefined, 1, 2], 'unbound func with right args');
	t.deepEqual(bound(1, 2, 3), [hasStrictMode ? 1 : Object(1), 2, 3], 'bound func with right args');
	t.deepEqual(boundR(1, 2), [sentinel, 1, 2], 'bound func with receiver, with right args');
	t.deepEqual(boundArg(2), [sentinel, 1, 2], 'bound func with receiver and arg, with right arg');

	// @ts-expect-error
	t.deepEqual(func(1, 2, 3), [undefined, 1, 2], 'unbound func with too many args');
	// @ts-expect-error
	t.deepEqual(bound(1, 2, 3, 4), [hasStrictMode ? 1 : Object(1), 2, 3], 'bound func with too many args');
	// @ts-expect-error
	t.deepEqual(boundR(1, 2, 3), [sentinel, 1, 2], 'bound func with receiver, with too many args');
	// @ts-expect-error
	t.deepEqual(boundArg(2, 3), [sentinel, 1, 2], 'bound func with receiver and arg, with too many args');

	t.end();
});
