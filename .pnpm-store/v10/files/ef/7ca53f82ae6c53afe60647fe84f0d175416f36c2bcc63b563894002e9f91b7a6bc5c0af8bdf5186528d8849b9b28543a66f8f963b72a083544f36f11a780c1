'use strict';

var test = require('tape');

var stopIterationIterator = require('../');

test('stopIterationIterator', function (t) {
	t.equal(typeof stopIterationIterator, 'function', 'stopIterationIterator is a function');

	t.test('no StopIteration support', { skip: typeof StopIteration === 'object' }, function (st) {
		st['throws'](
			// @ts-expect-error
			function () { stopIterationIterator(); },
			SyntaxError,
			'throws a SyntaxError when StopIteration is not supported'
		);

		st.end();
	});

	t.test('StopIteration support', { skip: typeof StopIteration !== 'object' }, function (st) {
		// eslint-disable-next-line no-extra-parens
		var s = /** @type {Set<number> & { iterator(): SetIterator<number>}} */ (new Set([1, 2]));

		var i = s.iterator();
		st.equal(i.next(), 1, 'first item is 1');
		st.equal(i.next(), 2, 'second item is 2');
		try {
			i.next();
			st.fail();
		} catch (e) {
			st.equal(e, StopIteration, 'StopIteration thrown');
		}

		// eslint-disable-next-line no-extra-parens
		var m = /** @type {Map<number, string> & { iterator(): MapIterator<[string, number]>}} */ (new Map([[1, 'a'], [2, 'b']]));
		var mi = m.iterator();
		st.deepEqual(mi.next(), [1, 'a'], 'first item is 1 and a');
		st.deepEqual(mi.next(), [2, 'b'], 'second item is 2 and b');
		try {
			mi.next();
			st.fail();
		} catch (e) {
			st.equal(e, StopIteration, 'StopIteration thrown');
		}

		st.end();
	});

	t.end();
});
