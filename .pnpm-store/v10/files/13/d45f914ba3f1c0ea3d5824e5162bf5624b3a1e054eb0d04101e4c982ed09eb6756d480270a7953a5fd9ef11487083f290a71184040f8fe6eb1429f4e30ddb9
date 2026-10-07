'use strict';

var test = require('tape');
var semver = require('semver');

var supportsPreserveSymlinks = require('../');
var browser = require('../browser');

test('supportsPreserveSymlinks', function (t) {
	t.equal(typeof supportsPreserveSymlinks, 'boolean', 'is a boolean');

	t.equal(browser, null, 'browser file is `null`');
	t.equal(
		supportsPreserveSymlinks,
		null,
		'in a browser, is null',
		{ skip: typeof window === 'undefined' }
	);

	var expected = semver.satisfies(process.version, '>= 6.2');
	t.equal(
		supportsPreserveSymlinks,
		expected,
		'is true in node v6.2+, false otherwise (actual: ' + supportsPreserveSymlinks + ', expected ' + expected + ')',
		{ skip: typeof window !== 'undefined' }
	);

	t.end();
});
