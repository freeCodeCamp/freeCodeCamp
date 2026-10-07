'use strict';

var test = require('tape');

var hasNames = require('../');

test('named functions', function (t) {
	function f() {} // eslint-disable-line func-style
	var g = function h() {};

	t.equal(typeof hasNames, 'function', 'is a function');
	t.equal(hasNames(), f.name === 'f' && g.name === 'h', 'functions have names or not as expected');

	t.end();
});

var oDP = Object.defineProperty;
if (oDP) {
	try {
		oDP({}, 'a', { value: 1 });
	} catch (e) {
		oDP = null;
	}
}

test('functionsHaveConfigurableNames', function (t) {
	t.equal(typeof hasNames.functionsHaveConfigurableNames, 'function', 'is a function');

	if (hasNames()) {
		var fn = function f() {};
		if (oDP) {
			try {
				oDP(fn, 'name', { configurable: true, value: 'foo' });
			} catch (e) {}
			if (fn.name === 'f') {
				t.equal(hasNames.functionsHaveConfigurableNames(), false, 'function names are not configurable');
			} else if (fn.name === 'foo') {
				t.equal(hasNames.functionsHaveConfigurableNames(), true, 'function names are not configurable');
			} else {
				t.fail('functions have names, but something surprising has happened. Please report this!');
			}
		} else {
			t.equal(hasNames.functionsHaveConfigurableNames(), false, 'function names are not configurable');
		}
	} else {
		t.equal(hasNames.functionsHaveConfigurableNames(), false, 'functions do not have names');
	}

	t.end();
});

test('boundFunctionsHaveNames', function (t) {
	t.equal(typeof hasNames.boundFunctionsHaveNames, 'function', 'is a function');

	var fn = function f() {};
	if (typeof fn.bind !== 'function') {
		t.equal(hasNames.boundFunctionsHaveNames(), false, 'bound functions do not have names, because .bind does not exist');
	} else if (hasNames()) {
		t.equal(hasNames.boundFunctionsHaveNames(), fn.bind().name !== '', 'bound functions have names');
	} else {
		t.equal(hasNames.boundFunctionsHaveNames(), false, 'bound functions do not have names, because none do');
	}

	t.end();
});
