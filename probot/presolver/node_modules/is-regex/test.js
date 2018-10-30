'use strict';

var test = require('tape');
var isRegex = require('./');
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

test('not regexes', function (t) {
	t.notOk(isRegex(), 'undefined is not regex');
	t.notOk(isRegex(null), 'null is not regex');
	t.notOk(isRegex(false), 'false is not regex');
	t.notOk(isRegex(true), 'true is not regex');
	t.notOk(isRegex(42), 'number is not regex');
	t.notOk(isRegex('foo'), 'string is not regex');
	t.notOk(isRegex([]), 'array is not regex');
	t.notOk(isRegex({}), 'object is not regex');
	t.notOk(isRegex(function () {}), 'function is not regex');
	t.end();
});

test('@@toStringTag', { skip: !hasToStringTag }, function (t) {
	var regex = /a/g;
	var fakeRegex = {
		toString: function () { return String(regex); },
		valueOf: function () { return regex; }
	};
	fakeRegex[Symbol.toStringTag] = 'RegExp';
	t.notOk(isRegex(fakeRegex), 'fake RegExp with @@toStringTag "RegExp" is not regex');
	t.end();
});

test('regexes', function (t) {
	t.ok(isRegex(/a/g), 'regex literal is regex');
	t.ok(isRegex(new RegExp('a', 'g')), 'regex object is regex');
	t.end();
});

test('does not mutate regexes', function (t) {
	t.test('lastIndex is a marker object', function (st) {
		var regex = /a/;
		var marker = {};
		regex.lastIndex = marker;
		st.equal(regex.lastIndex, marker, 'lastIndex is the marker object');
		st.ok(isRegex(regex), 'is regex');
		st.equal(regex.lastIndex, marker, 'lastIndex is the marker object after isRegex');
		st.end();
	});

	t.test('lastIndex is nonzero', function (st) {
		var regex = /a/;
		regex.lastIndex = 3;
		st.equal(regex.lastIndex, 3, 'lastIndex is 3');
		st.ok(isRegex(regex), 'is regex');
		st.equal(regex.lastIndex, 3, 'lastIndex is 3 after isRegex');
		st.end();
	});

	t.end();
});
