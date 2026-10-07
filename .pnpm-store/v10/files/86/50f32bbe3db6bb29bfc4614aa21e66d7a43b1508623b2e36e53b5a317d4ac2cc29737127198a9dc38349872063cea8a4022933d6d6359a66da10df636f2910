'use strict';

var test = require('tape');
var hasSymbolToStringTag = require('../');
var runSymbolTests = require('./tests');

test('interface', function (t) {
	t.equal(typeof hasSymbolToStringTag, 'function', 'is a function');
	t.equal(typeof hasSymbolToStringTag(), 'boolean', 'returns a boolean');
	t.end();
});

test('Symbol.toStringTag exists', { skip: !hasSymbolToStringTag() }, function (t) {
	runSymbolTests(t);
	t.end();
});

test('Symbol.toStringTag does not exist', { skip: hasSymbolToStringTag() }, function (t) {
	t.equal(typeof Symbol === 'undefined' ? 'undefined' : typeof Symbol.toStringTag, 'undefined', 'global Symbol.toStringTag is undefined');
	t.end();
});
