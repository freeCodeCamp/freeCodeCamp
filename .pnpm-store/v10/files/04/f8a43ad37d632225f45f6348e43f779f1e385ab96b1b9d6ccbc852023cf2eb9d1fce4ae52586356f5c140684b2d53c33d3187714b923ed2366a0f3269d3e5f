'use strict';

var test = require('tape');
var parse = require('../').parse;

test('set env vars', function (t) {
	t.same(
		parse('ABC=444 x y z'),
		['ABC=444', 'x', 'y', 'z']
	);
	t.same(
		parse('ABC=3\\ 4\\ 5 x y z'),
		['ABC=3 4 5', 'x', 'y', 'z']
	);
	t.same(
		parse('X="7 8 9" printx'),
		['X=7 8 9', 'printx']
	);
	t.same(
		parse('X="7 8 9"; printx'),
		['X=7 8 9', { op: ';' }, 'printx']
	);
	t.same(
		parse('X="7 8 9"; printx', function () {
			t.fail('should not have matched any keys');
		}),
		['X=7 8 9', { op: ';' }, 'printx']
	);

	t.end();
});
