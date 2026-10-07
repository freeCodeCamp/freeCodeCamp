'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var v = require('es-value-fixtures');
var forEach = require('for-each');
var hasOwn = require('hasown');

var shimUnscopables = require('../');

/** @type {(a: symbol, b: symbol) => number} */
var sortSymbols = function (a, b) {
	return inspect(a).localeCompare(inspect(b));
};

test('shimUnscopables', function (t) {
	t.equal(typeof shimUnscopables, 'function', 'is a function');

	forEach(v.nonStrings, function (notNonEmptyString) {
		t['throws'](
			// @ts-expect-error
			function () { shimUnscopables(notNonEmptyString); },
			TypeError,
			inspect(notNonEmptyString) + ' is not a non-empty String'
		);
	});

	t['throws'](
		// @ts-expect-error
		function () { shimUnscopables('x'); },
		TypeError,
		inspect('x') + ' is not on Array.prototype'
	);

	t.test('no symbols', { skip: typeof Symbol === 'function' }, function (st) {
		st.doesNotThrow(function () { shimUnscopables('forEach'); });

		st.end();
	});

	t.test('symbols, no unscopables', { skip: typeof Symbol !== 'function' || !!Symbol.unscopables }, function (st) {
		st.deepEqual(Object.getOwnPropertySymbols(Array.prototype), [Symbol.iterator]);

		shimUnscopables('forEach');

		st.deepEqual(Object.getOwnPropertySymbols(Array.prototype), [Symbol.iterator]);

		st.end();
	});

	t.test('Symbol.unscopables', { skip: typeof Symbol !== 'function' || !Symbol.unscopables }, function (st) {
		st.deepEqual(
			Object.getOwnPropertySymbols(Array.prototype).sort(sortSymbols),
			[Symbol.iterator, Symbol.unscopables]
		);
		st.notOk(hasOwn(Array.prototype[Symbol.unscopables], 'forEach'), 'unscopables map lacks forEach');

		shimUnscopables('forEach');

		st.deepEqual(
			Object.getOwnPropertySymbols(Array.prototype).sort(sortSymbols),
			[Symbol.iterator, Symbol.unscopables]
		);
		st.equal(Array.prototype[Symbol.unscopables].forEach, true, 'unscopables map has forEach');

		st.end();
	});

	t.end();
});
