'use strict';

var test = require('tape');
var parse = require('../').parse;

test('single operators', function (t) {
	t.same(parse('beep | boop'), ['beep', { op: '|' }, 'boop']);
	t.same(parse('beep|boop'), ['beep', { op: '|' }, 'boop']);
	t.same(parse('beep \\| boop'), ['beep', '|', 'boop']);
	t.same(parse('beep "|boop"'), ['beep', '|boop']);

	t.same(parse('echo zing &'), ['echo', 'zing', { op: '&' }]);
	t.same(parse('echo zing&'), ['echo', 'zing', { op: '&' }]);
	t.same(parse('echo zing\\&'), ['echo', 'zing&']);
	t.same(parse('echo "zing\\&"'), ['echo', 'zing\\&']);

	t.same(parse('beep;boop'), ['beep', { op: ';' }, 'boop']);
	t.same(parse('(beep;boop)'), [
		{ op: '(' }, 'beep', { op: ';' }, 'boop', { op: ')' }
	]);

	t.same(parse('beep>boop'), ['beep', { op: '>' }, 'boop']);
	t.same(parse('beep 2>boop'), ['beep', '2', { op: '>' }, 'boop']);
	t.same(parse('beep<boop'), ['beep', { op: '<' }, 'boop']);

	t.end();
});

test('double operators', function (t) {
	t.same(parse('beep || boop'), ['beep', { op: '||' }, 'boop']);
	t.same(parse('beep||boop'), ['beep', { op: '||' }, 'boop']);
	t.same(parse('beep ||boop'), ['beep', { op: '||' }, 'boop']);
	t.same(parse('beep|| boop'), ['beep', { op: '||' }, 'boop']);
	t.same(parse('beep  ||   boop'), ['beep', { op: '||' }, 'boop']);

	t.same(parse('beep && boop'), ['beep', { op: '&&' }, 'boop']);
	t.same(
		parse('beep && boop || byte'),
		['beep', { op: '&&' }, 'boop', { op: '||' }, 'byte']
	);
	t.same(
		parse('beep&&boop||byte'),
		['beep', { op: '&&' }, 'boop', { op: '||' }, 'byte']
	);
	t.same(
		parse('beep\\&\\&boop||byte'),
		['beep&&boop', { op: '||' }, 'byte']
	);
	t.same(
		parse('beep\\&&boop||byte'),
		['beep&', { op: '&' }, 'boop', { op: '||' }, 'byte']
	);
	t.same(
		parse('beep;;boop|&byte>>blip'),
		['beep', { op: ';;' }, 'boop', { op: '|&' }, 'byte', { op: '>>' }, 'blip']
	);

	t.same(parse('beep 2>&1'), ['beep', '2', { op: '>&' }, '1']);

	t.same(
		parse('beep<(boop)'),
		['beep', { op: '<(' }, 'boop', { op: ')' }]
	);
	t.same(
		parse('beep<<(boop)'),
		['beep', { op: '<' }, { op: '<(' }, 'boop', { op: ')' }]
	);

	t.end();
});

test('duplicating input file descriptors', function (t) {
	// duplicating stdout to file descriptor 3
	t.same(parse('beep 3<&1'), ['beep', '3', { op: '<&' }, '1']);

	// duplicating stdout to file descriptor 0, i.e. stdin
	t.same(parse('beep <&1'), ['beep', { op: '<&' }, '1']);

	// closes stdin
	t.same(parse('beep <&-'), ['beep', { op: '<&' }, '-']);

	t.end();
});

test('here strings', function (t) {
	t.same(parse('cat <<< "hello world"'), ['cat', { op: '<<<' }, 'hello world']);
	t.same(parse('cat <<< hello'), ['cat', { op: '<<<' }, 'hello']);
	t.same(parse('cat<<<hello'), ['cat', { op: '<<<' }, 'hello']);
	t.same(parse('cat<<<"hello world"'), ['cat', { op: '<<<' }, 'hello world']);

	t.end();
});

test('glob patterns', function (t) {
	t.same(
		parse('tap test/*.test.js'),
		['tap', { op: 'glob', pattern: 'test/*.test.js' }]
	);

	t.same(parse('tap "test/*.test.js"'), ['tap', 'test/*.test.js']);
	t.end();
});
