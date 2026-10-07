'use strict';

var test = require('tape');
var parse = require('../').parse;

test('parse shell commands', function (t) {
	t.same(parse(''), [], 'parses an empty string');

	t['throws'](
		function () { parse('${}'); },
		Error,
		'empty substitution throws'
	);
	t['throws'](
		function () { parse('${'); },
		Error,
		'incomplete substitution throws'
	);

	t.same(parse('a \'b\' "c"'), ['a', 'b', 'c']);
	t.same(
		parse('beep "boop" \'foo bar baz\' "it\'s \\"so\\" groovy"'),
		['beep', 'boop', 'foo bar baz', 'it\'s "so" groovy']
	);
	t.same(parse('a b\\ c d'), ['a', 'b c', 'd']);
	t.same(parse('\\$beep bo\\`op'), ['$beep', 'bo`op']);
	t.same(parse('echo "foo = \\"foo\\""'), ['echo', 'foo = "foo"']);
	t.same(parse(''), []);
	t.same(parse(' '), []);
	t.same(parse('\t'), []);
	t.same(parse('a"b c d"e'), ['ab c de']);
	t.same(parse('a\\ b"c d"\\ e f'), ['a bc d e', 'f']);
	t.same(parse('a\\ b"c d"\\ e\'f g\' h'), ['a bc d ef g', 'h']);
	t.same(parse("x \"bl'a\"'h'"), ['x', "bl'ah"]);
	t.same(parse("x bl^'a^'h'", {}, { escape: '^' }), ['x', "bl'a'h"]);
	t.same(parse('abcH def', {}, { escape: 'H' }), ['abc def']);

	t.deepEqual(parse('# abc  def  ghi'), [{ comment: ' abc  def  ghi' }], 'start-of-line comment content is unparsed');
	t.deepEqual(parse('xyz # abc  def  ghi'), ['xyz', { comment: ' abc  def  ghi' }], 'comment content is unparsed');

	t.end();
});
