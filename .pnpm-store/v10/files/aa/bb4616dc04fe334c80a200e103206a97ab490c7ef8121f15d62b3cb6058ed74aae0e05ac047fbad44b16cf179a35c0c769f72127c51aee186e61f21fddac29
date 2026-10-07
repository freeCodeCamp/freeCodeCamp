'use strict';

var index = require('../');
var callBind = require('call-bind');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](callBind(index, null, undefined, function () {}), TypeError, 'undefined is not an object');
		st['throws'](callBind(index, null, null, function () {}), TypeError, 'null is not an object');
		st.end();
	});

	runTests(index, t);

	t.end();
});
