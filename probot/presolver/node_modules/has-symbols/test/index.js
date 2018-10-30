'use strict';

var test = require('tape');
var hasSymbols = require('../');
var runSymbolTests = require('./tests');

test('interface', function (t) {
 	t.equal(typeof hasSymbols, 'function', 'is a function');
	t.equal(typeof hasSymbols(), 'boolean', 'returns a boolean');
	t.end();
});

test('Symbols are supported', { skip: !hasSymbols() }, function (t) {
	runSymbolTests(t);
	t.end();
});

test('Symbols are not supported', { skip: hasSymbols() }, function (t) {
	t.equal(typeof Symbol, 'undefined', 'global Symbol is undefined');
	t.equal(typeof Object.getOwnPropertySymbols, 'undefined', 'Object.getOwnPropertySymbols does not exist');
	t.end();
});
