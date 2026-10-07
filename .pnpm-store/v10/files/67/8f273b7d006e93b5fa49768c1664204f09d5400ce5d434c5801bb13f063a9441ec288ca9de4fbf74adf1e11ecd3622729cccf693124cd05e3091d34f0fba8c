'use strict';

var test = require('tape');
var parse = require('../').parse;

function getEnv() {
	return 'xxx';
}

function getEnvObj() {
	return { op: '@@' };
}

test('functional env expansion', function (t) {
	t.plan(4);

	t.same(parse('a $XYZ c', getEnv), ['a', 'xxx', 'c']);
	t.same(parse('a $XYZ c', getEnvObj), ['a', { op: '@@' }, 'c']);
	t.same(parse('a${XYZ}c', getEnvObj), ['a', { op: '@@' }, 'c']);
	t.same(parse('"a $XYZ c"', getEnvObj), ['a ', { op: '@@' }, ' c']);
});
