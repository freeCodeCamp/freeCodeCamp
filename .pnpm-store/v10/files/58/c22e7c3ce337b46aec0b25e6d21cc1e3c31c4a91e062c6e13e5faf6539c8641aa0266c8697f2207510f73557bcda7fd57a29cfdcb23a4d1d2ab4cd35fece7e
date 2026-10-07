'use strict';

/* eslint no-proto: 0 */

var parse = require('../');
var test = require('tape');

test('proto pollution', function (t) {
	var argv = parse(['--__proto__.x', '123']);
	t.equal({}.x, undefined);
	t.equal(argv.__proto__.x, undefined);
	t.equal(argv.x, undefined);
	t.end();
});

test('proto pollution (array)', function (t) {
	var argv = parse(['--x', '4', '--x', '5', '--x.__proto__.z', '789']);
	t.equal({}.z, undefined);
	t.deepEqual(argv.x, [4, 5]);
	t.equal(argv.x.z, undefined);
	t.equal(argv.x.__proto__.z, undefined);
	t.end();
});

test('proto pollution (number)', function (t) {
	var argv = parse(['--x', '5', '--x.__proto__.z', '100']);
	t.equal({}.z, undefined);
	t.equal((4).z, undefined);
	t.equal(argv.x, 5);
	t.equal(argv.x.z, undefined);
	t.end();
});

test('proto pollution (string)', function (t) {
	var argv = parse(['--x', 'abc', '--x.__proto__.z', 'def']);
	t.equal({}.z, undefined);
	t.equal('...'.z, undefined);
	t.equal(argv.x, 'abc');
	t.equal(argv.x.z, undefined);
	t.end();
});

test('proto pollution (constructor)', function (t) {
	var argv = parse(['--constructor.prototype.y', '123']);
	t.equal({}.y, undefined);
	t.equal(argv.y, undefined);
	t.end();
});

test('proto pollution (constructor function)', function (t) {
	var argv = parse(['--_.concat.constructor.prototype.y', '123']);
	function fnToBeTested() {}
	t.equal(fnToBeTested.y, undefined);
	t.equal(argv.y, undefined);
	t.end();
});

// powered by snyk - https://github.com/backstage/backstage/issues/10343
test('proto pollution (constructor function) snyk', function (t) {
	var argv = parse('--_.constructor.constructor.prototype.foo bar'.split(' '));
	t.equal(function () {}.foo, undefined);
	t.equal(argv.y, undefined);
	t.end();
});
