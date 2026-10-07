'use strict';

var implementation = require('../implementation');
var callBind = require('call-bind');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(callBind(implementation, Object), t);

	t.end();
});
