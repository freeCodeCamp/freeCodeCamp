'use strict';

var parse = require('../');
var test = require('tape');

test('boolean and alias is not unknown', function (t) {
	var unknown = [];
	function unknownFn(arg) {
		unknown.push(arg);
		return false;
	}
	var aliased = ['-h', 'true', '--derp', 'true'];
	var regular = ['--herp', 'true', '-d', 'true'];
	var opts = {
		alias: { h: 'herp' },
		boolean: 'h',
		unknown: unknownFn,
	};
	parse(aliased, opts);
	parse(regular, opts);

	t.same(unknown, ['--derp', '-d']);
	t.end();
});

test('flag boolean true any double hyphen argument is not unknown', function (t) {
	var unknown = [];
	function unknownFn(arg) {
		unknown.push(arg);
		return false;
	}
	var argv = parse(['--honk', '--tacos=good', 'cow', '-p', '55'], {
		boolean: true,
		unknown: unknownFn,
	});
	t.same(unknown, ['--tacos=good', 'cow', '-p']);
	t.same(argv, {
		honk: true,
		_: [],
	});
	t.end();
});

test('string and alias is not unknown', function (t) {
	var unknown = [];
	function unknownFn(arg) {
		unknown.push(arg);
		return false;
	}
	var aliased = ['-h', 'hello', '--derp', 'goodbye'];
	var regular = ['--herp', 'hello', '-d', 'moon'];
	var opts = {
		alias: { h: 'herp' },
		string: 'h',
		unknown: unknownFn,
	};
	parse(aliased, opts);
	parse(regular, opts);

	t.same(unknown, ['--derp', '-d']);
	t.end();
});

test('default and alias is not unknown', function (t) {
	var unknown = [];
	function unknownFn(arg) {
		unknown.push(arg);
		return false;
	}
	var aliased = ['-h', 'hello'];
	var regular = ['--herp', 'hello'];
	var opts = {
		default: { h: 'bar' },
		alias: { h: 'herp' },
		unknown: unknownFn,
	};
	parse(aliased, opts);
	parse(regular, opts);

	t.same(unknown, []);
	t.end();
	unknownFn(); // exercise fn for 100% coverage
});

test('value following -- is not unknown', function (t) {
	var unknown = [];
	function unknownFn(arg) {
		unknown.push(arg);
		return false;
	}
	var aliased = ['--bad', '--', 'good', 'arg'];
	var opts = {
		'--': true,
		unknown: unknownFn,
	};
	var argv = parse(aliased, opts);

	t.same(unknown, ['--bad']);
	t.same(argv, {
		'--': ['good', 'arg'],
		_: [],
	});
	t.end();
});
