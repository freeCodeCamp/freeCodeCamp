'use strict';

var test = require('tape');

if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
	test('has native Symbol support', function (t) {
		t.equal(typeof Symbol, 'function');
		t.equal(typeof Symbol(), 'symbol');
		t.end();
	});
	// @ts-expect-error CJS has top-level return
	return;
}

var hasSymbolToStringTag = require('../../shams');

test('polyfilled Symbols', function (t) {
	/* eslint-disable global-require */
	t.equal(hasSymbolToStringTag(), false, 'hasSymbolToStringTag is false before polyfilling');

	// @ts-expect-error no types defined
	require('get-own-property-symbols');

	require('../tests')(t);

	var hasToStringTagAfter = hasSymbolToStringTag();
	t.equal(hasToStringTagAfter, true, 'hasSymbolToStringTag is true after polyfilling');
	/* eslint-enable global-require */
	t.end();
});
