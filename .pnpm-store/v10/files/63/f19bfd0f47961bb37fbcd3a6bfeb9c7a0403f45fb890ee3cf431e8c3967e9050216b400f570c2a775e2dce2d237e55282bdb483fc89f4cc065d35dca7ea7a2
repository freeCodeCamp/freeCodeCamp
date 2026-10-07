'use strict';

var test = require('tape');
var runTests = require('./tests');

test('with uglify', function (t) {
	/* eslint global-require: 0 */
	require('uglify-register/api').register({
		exclude: [/\/node_modules\//, /\/test\//],
		uglify: { mangle: true }
	});

	var getName = require('../');
	runTests(getName, t);

	t.end();
});
