'use strict';

var parse = require('../');
var test = require('tape');

test('flag boolean default false', function (t) {
	var argv = parse(['moo'], {
		boolean: ['t', 'verbose'],
		default: { verbose: false, t: false },
	});

	t.deepEqual(argv, {
		verbose: false,
		t: false,
		_: ['moo'],
	});

	t.deepEqual(typeof argv.verbose, 'boolean');
	t.deepEqual(typeof argv.t, 'boolean');
	t.end();

});

test('boolean groups', function (t) {
	var argv = parse(['-x', '-z', 'one', 'two', 'three'], {
		boolean: ['x', 'y', 'z'],
	});

	t.deepEqual(argv, {
		x: true,
		y: false,
		z: true,
		_: ['one', 'two', 'three'],
	});

	t.deepEqual(typeof argv.x, 'boolean');
	t.deepEqual(typeof argv.y, 'boolean');
	t.deepEqual(typeof argv.z, 'boolean');
	t.end();
});
test('boolean and alias with chainable api', function (t) {
	var aliased = ['-h', 'derp'];
	var regular = ['--herp', 'derp'];
	var aliasedArgv = parse(aliased, {
		boolean: 'herp',
		alias: { h: 'herp' },
	});
	var propertyArgv = parse(regular, {
		boolean: 'herp',
		alias: { h: 'herp' },
	});
	var expected = {
		herp: true,
		h: true,
		_: ['derp'],
	};

	t.same(aliasedArgv, expected);
	t.same(propertyArgv, expected);
	t.end();
});

test('boolean and alias with options hash', function (t) {
	var aliased = ['-h', 'derp'];
	var regular = ['--herp', 'derp'];
	var opts = {
		alias: { h: 'herp' },
		boolean: 'herp',
	};
	var aliasedArgv = parse(aliased, opts);
	var propertyArgv = parse(regular, opts);
	var expected = {
		herp: true,
		h: true,
		_: ['derp'],
	};
	t.same(aliasedArgv, expected);
	t.same(propertyArgv, expected);
	t.end();
});

test('boolean and alias array with options hash', function (t) {
	var aliased = ['-h', 'derp'];
	var regular = ['--herp', 'derp'];
	var alt = ['--harp', 'derp'];
	var opts = {
		alias: { h: ['herp', 'harp'] },
		boolean: 'h',
	};
	var aliasedArgv = parse(aliased, opts);
	var propertyArgv = parse(regular, opts);
	var altPropertyArgv = parse(alt, opts);
	var expected = {
		harp: true,
		herp: true,
		h: true,
		_: ['derp'],
	};
	t.same(aliasedArgv, expected);
	t.same(propertyArgv, expected);
	t.same(altPropertyArgv, expected);
	t.end();
});

test('boolean and alias using explicit true', function (t) {
	var aliased = ['-h', 'true'];
	var regular = ['--herp', 'true'];
	var opts = {
		alias: { h: 'herp' },
		boolean: 'h',
	};
	var aliasedArgv = parse(aliased, opts);
	var propertyArgv = parse(regular, opts);
	var expected = {
		herp: true,
		h: true,
		_: [],
	};

	t.same(aliasedArgv, expected);
	t.same(propertyArgv, expected);
	t.end();
});

// regression, see https://github.com/substack/node-optimist/issues/71
test('boolean and --x=true', function (t) {
	var parsed = parse(['--boool', '--other=true'], {
		boolean: 'boool',
	});

	t.same(parsed.boool, true);
	t.same(parsed.other, 'true');

	parsed = parse(['--boool', '--other=false'], {
		boolean: 'boool',
	});

	t.same(parsed.boool, true);
	t.same(parsed.other, 'false');
	t.end();
});

test('boolean --boool=true', function (t) {
	var parsed = parse(['--boool=true'], {
		default: {
			boool: false,
		},
		boolean: ['boool'],
	});

	t.same(parsed.boool, true);
	t.end();
});

test('boolean --boool=false', function (t) {
	var parsed = parse(['--boool=false'], {
		default: {
			boool: true,
		},
		boolean: ['boool'],
	});

	t.same(parsed.boool, false);
	t.end();
});

test('boolean using something similar to true', function (t) {
	var opts = { boolean: 'h' };
	var result = parse(['-h', 'true.txt'], opts);
	var expected = {
		h: true,
		_: ['true.txt'],
	};

	t.same(result, expected);
	t.end();
});
