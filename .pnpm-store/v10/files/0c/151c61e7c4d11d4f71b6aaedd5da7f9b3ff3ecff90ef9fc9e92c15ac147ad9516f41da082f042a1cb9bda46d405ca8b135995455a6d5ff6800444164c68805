'use strict';

var getName = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('non-functions', function (st) {
		st['throws'](function () { getName(); }, TypeError, 'undefined is not a function');
		st['throws'](function () { getName(null); }, TypeError, 'null is not a function');
		st['throws'](function () { getName(true); }, TypeError, 'true is not a function');
		st['throws'](function () { getName(false); }, TypeError, 'false is not a function');
		st['throws'](function () { getName('foo'); }, TypeError, '"foo" is not a function');
		st['throws'](function () { getName([]); }, TypeError, '[] is not a function');
		st['throws'](function () { getName({}); }, TypeError, '{} is not a function');
		st['throws'](function () { getName(/a/g); }, TypeError, '/a/g is not a function');
		st.end();
	});

	runTests(getName, t);

	t.end();
});
