'use strict';

var hasOwn = require('hasown');

module.exports = function (toSorted, t) {
	var nums = [2, 1, 3];
	var result = toSorted(nums);
	t.deepEqual(
		result,
		[1, 2, 3],
		'array is sorted'
	);
	t.notEqual(nums, result, 'original array is not returned');
	t.deepEqual(nums, [2, 1, 3], 'original array is unchanged');

	nums.sort();
	t.deepEqual(nums, result, 'mutated original matches result');

	t.deepEqual(
		toSorted('acab'),
		['a', 'a', 'b', 'c'],
		'string sorts to array'
	);

	var halfPoo = '\uD83D';
	var endPoo = '\uDCA9';
	var poo = halfPoo + endPoo;
	t.deepEqual(
		toSorted('a' + poo + 'c'),
		['a', 'c', halfPoo, endPoo],
		'code point is sorted as expected'
	);

	var arrayLikeLengthValueOf = {
		length: {
			valueOf: function () { return 2; }
		},
		0: 4,
		1: 0,
		2: 1
	};
	t.deepEqual(toSorted(arrayLikeLengthValueOf), [0, 4]);

	t.test('not positive integer lengths', function (st) {
		st.deepEqual(toSorted({ length: -2 }), []);
		st.deepEqual(toSorted({ length: 'dog' }), []);
		st.deepEqual(toSorted({ length: NaN }), []);

		st.end();
	});

	t.test('getters', { skip: !Object.defineProperty }, function (st) {
		var getCalls = [];

		var arrayLike = {
			0: 2,
			1: 1,
			2: 3,
			length: 3
		};
		Object.defineProperty(arrayLike, '0', {
			get: function () {
				getCalls.push(0);
				return 2;
			}
		});
		Object.defineProperty(arrayLike, '1', {
			get: function () {
				getCalls.push(1);
				return 1;
			}
		});
		Object.defineProperty(arrayLike, '2', {
			get: function () {
				getCalls.push(2);
				return 3;
			}
		});

		var up = { gross: true };
		st['throws'](
			function () {
				toSorted(arrayLike, function () {
					throw up;
				});
			},
			up
		);
		st.deepEqual(getCalls, [0, 1, 2]);

		var arr1 = [5, 0, 3];
		Object.defineProperty(arr1, '0', {
			get: function () {
				arr1.push(1);
				return 5;
			}
		});
		st.deepEqual(toSorted(arr1), [0, 3, 5]);

		var arr = [5, 1, 4, 6, 3];
		Array.prototype[3] = 2; // eslint-disable-line no-extend-native
		st.teardown(function () {
			delete Array.prototype[3];
		});

		Object.defineProperty(arr, '2', {
			get: function () {
				arr.length = 1;
				return 4;
			}
		});

		st.deepEqual(toSorted(arr), [1, 2, 4, 5, undefined]);

		st.end();
	});

	t.test('too-large lengths', function (st) {
		var arrayLike = {
			0: 0,
			4294967295: 4294967295,
			4294967296: 4294967296,
			length: Math.pow(2, 32)
		};

		st['throws'](
			function () { toSorted(arrayLike); },
			RangeError
		);

		st.end();
	});

	t.deepEqual(toSorted(true), [], 'true yields empty array');
	t.deepEqual(toSorted(false), [], 'false yields empty array');

	t.test('holes', function (st) {
		var arr = [3, /* hole */, 4, /* hole */, 1]; // eslint-disable-line no-sparse-arrays
		Array.prototype[3] = 2; // eslint-disable-line no-extend-native
		st.teardown(function () {
			delete Array.prototype[3];
		});

		var sorted = toSorted(arr);
		st.deepEqual(sorted, [1, 2, 3, 4, undefined]);
		st.ok(hasOwn(sorted, 4));

		st.end();
	});
};
