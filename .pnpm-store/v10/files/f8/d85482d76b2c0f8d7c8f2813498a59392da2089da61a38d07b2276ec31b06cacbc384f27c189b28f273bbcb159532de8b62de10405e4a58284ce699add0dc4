'use strict';

var callBind = require('../');
var hasStrictMode = require('has-strict-mode')();
var forEach = require('for-each');
var inspect = require('object-inspect');
var v = require('es-value-fixtures');

var test = require('tape');

/*
 * older engines have length nonconfigurable
 * in io.js v3, it is configurable except on bound functions, hence the .bind()
 */
var boundFnsHaveConfigurableLengths = require('set-function-length/env').boundFnsHaveConfigurableLengths;

test('callBind', function (t) {
	forEach(v.nonFunctions, function (nonFunction) {
		t['throws'](
			function () { callBind(nonFunction); },
			TypeError,
			inspect(nonFunction) + ' is not a function'
		);
	});

	var sentinel = { sentinel: true };
	var func = function (a, b) {
		// eslint-disable-next-line no-invalid-this
		return [!hasStrictMode && this === global ? undefined : this, a, b];
	};
	t.equal(func.length, 2, 'original function length is 2');
	t.deepEqual(func(), [undefined, undefined, undefined], 'unbound func with too few args');
	t.deepEqual(func(1, 2), [undefined, 1, 2], 'unbound func with right args');
	t.deepEqual(func(1, 2, 3), [undefined, 1, 2], 'unbound func with too many args');

	var bound = callBind(func);
	t.equal(bound.length, func.length + 1, 'function length is preserved', { skip: !boundFnsHaveConfigurableLengths });
	t.deepEqual(bound(), [undefined, undefined, undefined], 'bound func with too few args');
	t.deepEqual(bound(1, 2), [hasStrictMode ? 1 : Object(1), 2, undefined], 'bound func with right args');
	t.deepEqual(bound(1, 2, 3), [hasStrictMode ? 1 : Object(1), 2, 3], 'bound func with too many args');

	var boundR = callBind(func, sentinel);
	t.equal(boundR.length, func.length, 'function length is preserved', { skip: !boundFnsHaveConfigurableLengths });
	t.deepEqual(boundR(), [sentinel, undefined, undefined], 'bound func with receiver, with too few args');
	t.deepEqual(boundR(1, 2), [sentinel, 1, 2], 'bound func with receiver, with right args');
	t.deepEqual(boundR(1, 2, 3), [sentinel, 1, 2], 'bound func with receiver, with too many args');

	var boundArg = callBind(func, sentinel, 1);
	t.equal(boundArg.length, func.length - 1, 'function length is preserved', { skip: !boundFnsHaveConfigurableLengths });
	t.deepEqual(boundArg(), [sentinel, 1, undefined], 'bound func with receiver and arg, with too few args');
	t.deepEqual(boundArg(2), [sentinel, 1, 2], 'bound func with receiver and arg, with right arg');
	t.deepEqual(boundArg(2, 3), [sentinel, 1, 2], 'bound func with receiver and arg, with too many args');

	t.test('callBind.apply', function (st) {
		var aBound = callBind.apply(func);
		st.deepEqual(aBound(sentinel), [sentinel, undefined, undefined], 'apply-bound func with no args');
		st.deepEqual(aBound(sentinel, [1], 4), [sentinel, 1, undefined], 'apply-bound func with too few args');
		st.deepEqual(aBound(sentinel, [1, 2], 4), [sentinel, 1, 2], 'apply-bound func with right args');

		var aBoundArg = callBind.apply(func);
		st.deepEqual(aBoundArg(sentinel, [1, 2, 3], 4), [sentinel, 1, 2], 'apply-bound func with too many args');
		st.deepEqual(aBoundArg(sentinel, [1, 2], 4), [sentinel, 1, 2], 'apply-bound func with right args');
		st.deepEqual(aBoundArg(sentinel, [1], 4), [sentinel, 1, undefined], 'apply-bound func with too few args');

		var aBoundR = callBind.apply(func, sentinel);
		st.deepEqual(aBoundR([1, 2, 3], 4), [sentinel, 1, 2], 'apply-bound func with receiver and too many args');
		st.deepEqual(aBoundR([1, 2], 4), [sentinel, 1, 2], 'apply-bound func with receiver and right args');
		st.deepEqual(aBoundR([1], 4), [sentinel, 1, undefined], 'apply-bound func with receiver and too few args');

		st.end();
	});

	t.end();
});
