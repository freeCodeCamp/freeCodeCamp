'use strict';

var test = require('tape');
var parse = require('../').parse;

test('expand environment variables', function (t) {
	t.same(parse('a $XYZ c', { XYZ: 'b' }), ['a', 'b', 'c']);
	t.same(parse('a${XYZ}c', { XYZ: 'b' }), ['abc']);
	t.same(parse('a${XYZ}c $XYZ', { XYZ: 'b' }), ['abc', 'b']);
	t.same(parse('"-$X-$Y-"', { X: 'a', Y: 'b' }), ['-a-b-']);
	t.same(parse("'-$X-$Y-'", { X: 'a', Y: 'b' }), ['-$X-$Y-']);
	t.same(parse('qrs"$zzz"wxy', { zzz: 'tuv' }), ['qrstuvwxy']);
	t.same(parse("qrs'$zzz'wxy", { zzz: 'tuv' }), ['qrs$zzzwxy']);
	t.same(parse('qrs${zzz}wxy'), ['qrswxy']);
	t.same(parse('qrs$wxy $'), ['qrs', '$']);
	t.same(parse('grep "xy$"'), ['grep', 'xy$']);
	t.same(parse('ab$x', { x: 'c' }), ['abc']);
	t.same(parse('ab\\$x', { x: 'c' }), ['ab$x']);
	t.same(parse('ab${x}def', { x: 'c' }), ['abcdef']);
	t.same(parse('ab\\${x}def', { x: 'c' }), ['ab${x}def']);
	t.same(parse('"ab\\${x}def"', { x: 'c' }), ['ab${x}def']);

	t.end();
});

test('expand environment variables within here-strings', function (t) {
	t.same(parse('a <<< $x', { x: 'Joe' }), ['a', { op: '<<<' }, 'Joe']);
	t.same(parse('a <<< ${x}', { x: 'Joe' }), ['a', { op: '<<<' }, 'Joe']);
	t.same(parse('a <<< "$x"', { x: 'Joe' }), ['a', { op: '<<<' }, 'Joe']);
	t.same(parse('a <<< "${x}"', { x: 'Joe' }), ['a', { op: '<<<' }, 'Joe']);

	t.end();
});

test('environment variables with metacharacters', function (t) {
	t.same(parse('a $XYZ c', { XYZ: '"b"' }), ['a', '"b"', 'c']);
	t.same(parse('a $XYZ c', { XYZ: '$X', X: 5 }), ['a', '$X', 'c']);
	t.same(parse('a"$XYZ"c', { XYZ: "'xyz'" }), ["a'xyz'c"]);

	t.end();
});

test('special shell parameters', function (t) {
	var chars = '*@#?-$!0_'.split('');
	t.plan(chars.length);

	chars.forEach(function (c) {
		var env = {};
		env[c] = 'xxx';
		t.same(parse('a $' + c + ' c', env), ['a', 'xxx', 'c']);
	});
});
