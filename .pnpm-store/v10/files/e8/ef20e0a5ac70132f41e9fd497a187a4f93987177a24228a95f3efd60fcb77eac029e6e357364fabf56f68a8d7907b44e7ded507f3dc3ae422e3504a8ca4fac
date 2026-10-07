'use strict';

var test = require('tape');
var gOPD = require('../');

test('gOPD', function (t) {
	t.test('supported', { skip: !gOPD }, function (st) {
		st.equal(typeof gOPD, 'function', 'is a function');

		var obj = { x: 1 };
		st.ok('x' in obj, 'property exists');

		// @ts-expect-error TS can't figure out narrowing from `skip`
		var desc = gOPD(obj, 'x');
		st.deepEqual(
			desc,
			{
				configurable: true,
				enumerable: true,
				value: 1,
				writable: true
			},
			'descriptor is as expected'
		);

		st.end();
	});

	t.test('not supported', { skip: !!gOPD }, function (st) {
		st.notOk(gOPD, 'is falsy');

		st.end();
	});

	t.end();
});
