'use strict';

var parse = require('../');
var test = require('tape');

test('-', function (t) {
	t.plan(6);
	t.deepEqual(parse(['-n', '-']), { n: '-', _: [] });
	t.deepEqual(parse(['--nnn', '-']), { nnn: '-', _: [] });
	t.deepEqual(parse(['-']), { _: ['-'] });
	t.deepEqual(parse(['-f-']), { f: '-', _: [] });
	t.deepEqual(
		parse(['-b', '-'], { boolean: 'b' }),
		{ b: true, _: ['-'] }
	);
	t.deepEqual(
		parse(['-s', '-'], { string: 's' }),
		{ s: '-', _: [] }
	);
});

test('-a -- b', function (t) {
	t.plan(2);
	t.deepEqual(parse(['-a', '--', 'b']), { a: true, _: ['b'] });
	t.deepEqual(parse(['--a', '--', 'b']), { a: true, _: ['b'] });
});

test('move arguments after the -- into their own `--` array', function (t) {
	t.plan(1);
	t.deepEqual(
		parse(['--name', 'John', 'before', '--', 'after'], { '--': true }),
		{ name: 'John', _: ['before'], '--': ['after'] }
	);
});

test('--- option value', function (t) {
	// A multi-dash value is largely an edge case, but check the behaviour is as expected,
	// and in particular the same for short option and long option (as made consistent in Jan 2023).
	t.plan(2);
	t.deepEqual(parse(['-n', '---']), { n: '---', _: [] });
	t.deepEqual(parse(['--nnn', '---']), { nnn: '---', _: [] });
});

