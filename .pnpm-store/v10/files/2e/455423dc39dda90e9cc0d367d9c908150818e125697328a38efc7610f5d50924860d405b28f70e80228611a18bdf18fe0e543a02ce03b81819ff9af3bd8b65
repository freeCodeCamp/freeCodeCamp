'use strict';

var test = require('tape');
var parse = require('../').parse;

test('comment', function (t) {
	t.same(parse('beep#boop'), ['beep', { comment: 'boop' }]);
	t.same(parse('beep #boop'), ['beep', { comment: 'boop' }]);
	t.same(parse('beep # boop'), ['beep', { comment: ' boop' }]);
	t.same(parse('beep # > boop'), ['beep', { comment: ' > boop' }]);
	t.same(parse('beep # "> boop"'), ['beep', { comment: ' "> boop"' }]);
	t.same(parse('beep "#"'), ['beep', '#']);
	t.same(parse('beep #"#"#'), ['beep', { comment: '"#"#' }]);
	t.same(parse('beep > boop # > foo'), ['beep', { op: '>' }, 'boop', { comment: ' > foo' }]);
	t.end();
});
