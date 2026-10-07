'use strict';

var test = require('tape');

var safePushApply = require('../');

test('safe-push-apply', function (t) {
	t.equal(typeof safePushApply, 'function', 'is a function');
	t.equal(safePushApply.length, 2, 'has a length of 2');

	t['throws'](
		// @ts-expect-error
		function () { safePushApply({}, []); },
		TypeError,
		'throws if target is not an array'
	);

	var a = [1, 2];
	var b = [3, 4];
	safePushApply(a, b);
	t.deepEqual(a, [1, 2, 3, 4], 'b is pushed into a');
	t.deepEqual(b, [3, 4], 'b is not modified');

	var c = '567';
	// @ts-expect-error TS ArrayLike doesn't accept strings for some reason
	safePushApply(a, c);
	t.deepEqual(a, [1, 2, 3, 4, '5', '6', '7'], 'works with arraylike source');

	t.end();
});
