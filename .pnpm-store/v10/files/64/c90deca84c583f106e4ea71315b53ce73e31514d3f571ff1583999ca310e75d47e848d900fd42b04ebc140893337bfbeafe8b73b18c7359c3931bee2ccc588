'use strict';

var mockProperty = require('mock-property');

function fakeArg(fn) {
	return function (st) {
		// try to break `arguments[1]`
		st.teardown(mockProperty(Object.prototype, 1, { value: 2 }));
		return fn(st);
	};
}

module.exports = function (includes, t) {
	t.test('cast searchString arg', fakeArg(function (st) {
		st.equals(includes('abc'), false);
		st.equals(includes('aundefinedb'), true);
		st.equals(includes('abc', undefined), false);
		st.equals(includes('aundefinedb', undefined), true);
		st.equals(includes('abc', null), false);
		st.equals(includes('anullb', null), true);
		st.equals(includes('abc', false), false);
		st.equals(includes('afalseb', false), true);
		st.equals(includes('abc', NaN), false);
		st.equals(includes('aNaNb', NaN), true);
		st.end();
	}));

	t.test('basic support', fakeArg(function (st) {
		st.equals(includes('abc', 'abc'), true);
		st.equals(includes('abc', 'def'), false);
		st.equals(includes('abc', ''), true);
		st.equals(includes('', ''), true);
		st.equals(includes('abc', 'bc'), true);
		st.equals(includes('abc', 'bc\0'), false);
		st.end();
	}));

	t.test('pos argument', function (st) {
		st.equals(includes('abc', 'b', -Infinity), true);
		st.equals(includes('abc', 'b', -1), true);
		st.equals(includes('abc', 'b', -0), true);
		st.equals(includes('abc', 'b', +0), true);
		st.equals(includes('abc', 'b', NaN), true);
		st.equals(includes('abc', 'b', 'x'), true);
		st.equals(includes('abc', 'b', false), true);
		st.equals(includes('abc', 'b', undefined), true);
		st.equals(includes('abc', 'b', null), true);
		st.equals(includes('abc', 'b', 1), true);
		st.equals(includes('abc', 'b', 2), false);
		st.equals(includes('abc', 'b', 3), false);
		st.equals(includes('abc', 'b', 4), false);
		st.equals(includes('abc', 'b', Number(Infinity)), false);
		st.end();
	});

	t.test('cast stringSearch arg with pos - included', function (st) {
		st.equals(includes('abc123def', 1, -Infinity), true);
		st.equals(includes('abc123def', 1, -1), true);
		st.equals(includes('abc123def', 1, -0), true);
		st.equals(includes('abc123def', 1, +0), true);
		st.equals(includes('abc123def', 1, NaN), true);
		st.equals(includes('abc123def', 1, 'x'), true);
		st.equals(includes('abc123def', 1, false), true);
		st.equals(includes('abc123def', 1, undefined), true);
		st.equals(includes('abc123def', 1, null), true);
		st.equals(includes('abc123def', 1, 1), true);
		st.equals(includes('abc123def', 1, 2), true);
		st.equals(includes('abc123def', 1, 3), true);
		st.equals(includes('abc123def', 1, 4), false);
		st.equals(includes('abc123def', 1, 5), false);
		st.equals(includes('abc123def', 1, Number(Infinity)), false);
		st.end();
	});

	t.test('cast stringSearch arg with pos - not included', function (st) {
		st.equals(includes('abc123def', 9, -Infinity), false);
		st.equals(includes('abc123def', 9, -1), false);
		st.equals(includes('abc123def', 9, -0), false);
		st.equals(includes('abc123def', 9, +0), false);
		st.equals(includes('abc123def', 9, NaN), false);
		st.equals(includes('abc123def', 9, 'x'), false);
		st.equals(includes('abc123def', 9, false), false);
		st.equals(includes('abc123def', 9, undefined), false);
		st.equals(includes('abc123def', 9, null), false);
		st.equals(includes('abc123def', 9, 1), false);
		st.equals(includes('abc123def', 9, 2), false);
		st.equals(includes('abc123def', 9, 3), false);
		st.equals(includes('abc123def', 9, 4), false);
		st.equals(includes('abc123def', 9, 5), false);
		st.equals(includes('abc123def', 9, Number(Infinity)), false);
		st.end();
	});

	t.test('regex searchString', function (st) {
		st.equals(includes('foo[a-z]+(bar)?', '[a-z]+'), true);
		st['throws'](function () { includes('foo[a-z]+(bar)?', /[a-z]+/); }, TypeError);
		st['throws'](function () { includes('foo/[a-z]+/(bar)?', /[a-z]+/); }, TypeError);
		st.equals(includes('foo[a-z]+(bar)?', '(bar)?'), true);
		st['throws'](function () { includes('foo[a-z]+(bar)?', /(bar)?/); }, TypeError);
		st['throws'](function () { includes('foo[a-z]+/(bar)?/', /(bar)?/); }, TypeError);
		st.end();
	});

	t.test('astral symbols', function (st) {
		// https://mathiasbynens.be/notes/javascript-unicode#poo-test
		var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
		st.equals(string.includes(''), true);
		st.equals(string.includes('\xF1t\xEBr'), true);
		st.equals(string.includes('\xE0liz\xE6'), true);
		st.equals(string.includes('\xF8n\u2603\uD83D\uDCA9'), true);
		st.equals(string.includes('\u2603'), true);
		st.equals(string.includes('\uD83D\uDCA9'), true);
		st.end();
	});

	t.test('nullish this object', function (st) {
		st['throws'](function () { includes(undefined); }, TypeError);
		st['throws'](function () { includes(undefined, 'b'); }, TypeError);
		st['throws'](function () { includes(undefined, 'b', 4); }, TypeError);
		st['throws'](function () { includes(null); }, TypeError);
		st['throws'](function () { includes(null, 'b'); }, TypeError);
		st['throws'](function () { includes(null, 'b', 4); }, TypeError);
		st.end();
	});

	t.test('cast this object', function (st) {
		st.equals(includes(42, '2'), true);
		st.equals(includes(42, 'b', 4), false);
		st.equals(includes(42, '2', 4), false);
		st.equals(includes({ toString: function () { return 'abc'; } }, 'b', 0), true);
		st.equals(includes({ toString: function () { return 'abc'; } }, 'b', 1), true);
		st.equals(includes({ toString: function () { return 'abc'; } }, 'b', 2), false);
		st['throws'](function () { includes({ toString: function () { throw new RangeError(); } }, /./); }, RangeError);
		st['throws'](function () { includes({ toString: function () { return 'abc'; } }, /./); }, TypeError);
		st.end();
	});
};
