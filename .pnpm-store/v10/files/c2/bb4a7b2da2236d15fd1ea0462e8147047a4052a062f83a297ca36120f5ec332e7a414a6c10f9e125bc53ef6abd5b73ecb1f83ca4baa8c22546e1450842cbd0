'use strict';

var test = require('tape');

if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
	test('has native Symbol support', function (t) {
		t.equal(typeof Symbol, 'function');
		t.equal(typeof Symbol(), 'symbol');
		t.end();
	});
	// @ts-expect-error TS is stupid and doesn't know about top level return
	return;
}

var hasSymbols = require('../../shams');

test('polyfilled Symbols', function (t) {
	/* eslint-disable global-require */
	t.equal(hasSymbols(), false, 'hasSymbols is false before polyfilling');
	require('core-js/fn/symbol');
	require('core-js/fn/symbol/to-string-tag');

	require('../tests')(t);

	var hasSymbolsAfter = hasSymbols();
	t.equal(hasSymbolsAfter, true, 'hasSymbols is true after polyfilling');
	/* eslint-enable global-require */
	t.end();
});
