'use strict';

var inspect = require('object-inspect');
var forEach = require('for-each');

module.exports = function (flatMap, t) {
	t.test('callback function', function (st) {
		forEach([[], {}, true, false, 42, 'foo', /a/g, null], function (nonFunction) {
			st['throws'](
				function () { flatMap([], nonFunction); },
				TypeError,
				inspect(nonFunction) + ' is not a function'
			);
		});

		st.end();
	});

	t.test('flatMaps', function (st) {
		var mapped = flatMap([1, [2], [3, 4]], function (x, i) {
			return [x, i];
		});

		var expected = [1, 0, [2], 1, [3, 4], 2];
		st.deepEqual(mapped, expected, 'array is flattened and mapped to tuples of item/index');
		st.equal(mapped.length, expected.length, 'array has expected length');

		var context = {};
		var actual;
		flatMap([1], function () { actual = this; }, context);
		st.equal(actual, context, 'thisArg works as expected');

		st.end();
	});

	t.test('sparse arrays', function (st) {
		var identity = function (x) { return x; };
		// eslint-disable-next-line no-sparse-arrays
		st.deepEqual(flatMap([, [1]], identity), flatMap([[], [1]], identity), 'an array hole is treated the same as an empty array');

		st.end();
	});

	t.test('test262: staging test from v8', function (st) {
		var arr1 = [0, 1, 2, 3];
		var f = function (e) {
			arr1[4] = 42;
			return e;
		};
		st.deepEqual(flatMap(arr1, f), [0, 1, 2, 3]);

		var arr2 = [0, 1, 2, 3];
		var g = function (e) {
			arr2.length = 3;
			return e;
		};
		st.deepEqual(flatMap(arr2, g), [0, 1, 2]);

		st.end();
	});
};
