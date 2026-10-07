'use strict';

var test = require('tape');

var hasPropertyDescriptors = require('../');

var sentinel = {};

test('hasPropertyDescriptors', function (t) {
	t.equal(typeof hasPropertyDescriptors, 'function', 'is a function');
	t.equal(typeof hasPropertyDescriptors.hasArrayLengthDefineBug, 'function', '`hasArrayLengthDefineBug` property is a function');

	var yes = hasPropertyDescriptors();
	t.test('property descriptors', { skip: !yes }, function (st) {
		var o = { a: sentinel };

		st.deepEqual(
			Object.getOwnPropertyDescriptor(o, 'a'),
			{
				configurable: true,
				enumerable: true,
				value: sentinel,
				writable: true
			},
			'has expected property descriptor'
		);

		Object.defineProperty(o, 'a', { enumerable: false, writable: false });

		st.deepEqual(
			Object.getOwnPropertyDescriptor(o, 'a'),
			{
				configurable: true,
				enumerable: false,
				value: sentinel,
				writable: false
			},
			'has expected property descriptor after [[Define]]'
		);

		st.end();
	});

	var arrayBug = hasPropertyDescriptors.hasArrayLengthDefineBug();
	t.test('defining array lengths', { skip: !yes || arrayBug }, function (st) {
		var arr = [1, , 3]; // eslint-disable-line no-sparse-arrays
		st.equal(arr.length, 3, 'array starts with length 3');

		Object.defineProperty(arr, 'length', { value: 5 });

		st.equal(arr.length, 5, 'array ends with length 5');

		st.end();
	});

	t.end();
});
