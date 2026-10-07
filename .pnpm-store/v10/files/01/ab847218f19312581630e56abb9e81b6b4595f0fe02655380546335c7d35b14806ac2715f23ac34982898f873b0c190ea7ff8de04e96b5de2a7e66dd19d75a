'use strict';

var hasOwn = require('hasown');
var inspect = require('object-inspect');
var supportsDescriptors = require('define-properties').supportsDescriptors;
var v = require('es-value-fixtures');

var forEach = require('for-each');
var availableFlags = require('available-regexp-flags');
var regexProperties = require('available-regexp-flags/properties');

var sortedFlags = availableFlags.slice().sort(function (a, b) { return a.localeCompare(b); }).join('');

var getRegexLiteral = function (stringRegex) {
	try {
		// eslint-disable-next-line no-new-func
		return Function('return ' + stringRegex + ';')();
	} catch (e) { /**/ }
	return null;
};

module.exports = function runTests(flags, t) {
	forEach(v.primitives, function (nonObject) {
		t['throws'](
			function () { flags(nonObject); },
			TypeError,
			'throws when called with a non-object receiver: ' + inspect(nonObject)
		);
	});

	t.equal(flags(/a/g), 'g', 'flags(/a/g) !== "g"');
	t.equal(flags(/a/gmi), 'gim', 'flags(/a/gmi) !== "gim"');
	t.equal(flags(new RegExp('a', 'gmi')), 'gim', 'flags(new RegExp("a", "gmi")) !== "gim"');
	t.equal(flags(/a/), '', 'flags(/a/) !== ""');
	t.equal(flags(new RegExp('a')), '', 'flags(new RegExp("a")) !== ""');

	forEach(availableFlags, function (flag) {
		var property = regexProperties[flag];
		t.test(property + ' flag', function (st) {
			st.equal(flags(getRegexLiteral('/a/' + flag)), flag, 'flags(/a/' + flag + ') !== ' + inspect(flag));
			st.equal(flags(new RegExp('a', flag)), flag, 'flags(new RegExp("a", ' + inspect(flag) + ')) !== ' + inspect(flag));
			st.end();
		});
	});

	t.test('sorting', function (st) {
		st.equal(flags(/a/gim), 'gim', 'flags(/a/gim) !== "gim"');
		st.equal(flags(/a/mig), 'gim', 'flags(/a/mig) !== "gim"');
		st.equal(flags(/a/mgi), 'gim', 'flags(/a/mgi) !== "gim"');
		if (hasOwn(RegExp.prototype, 'sticky')) {
			st.equal(flags(getRegexLiteral('/a/gyim')), 'gimy', 'flags(/a/gyim) !== "gimy"');
		}
		if (hasOwn(RegExp.prototype, 'unicode')) {
			st.equal(flags(getRegexLiteral('/a/ugmi')), 'gimu', 'flags(/a/ugmi) !== "gimu"');
		}
		if (hasOwn(RegExp.prototype, 'dotAll')) {
			st.equal(flags(getRegexLiteral('/a/sgmi')), 'gims', 'flags(/a/sgmi) !== "gims"');
		}

		var randomFlags = availableFlags.slice().sort(function () { return Math.random() > 0.5 ? 1 : -1; }).join('').replace('v', '');
		st.equal(
			flags(getRegexLiteral('/a/' + randomFlags)),
			sortedFlags.replace('v', ''),
			'random: flags(/a/' + randomFlags + ') === ' + inspect(sortedFlags)
		);

		st.end();
	});

	t.test('basic examples', function (st) {
		st.equal(flags(/a/g), 'g', '(/a/g).flags !== "g"');
		st.equal(flags(/a/gmi), 'gim', '(/a/gmi).flags !== "gim"');
		st.equal(flags(new RegExp('a', 'gmi')), 'gim', 'new RegExp("a", "gmi").flags !== "gim"');
		st.equal(flags(/a/), '', '(/a/).flags !== ""');
		st.equal(flags(new RegExp('a')), '', 'new RegExp("a").flags !== ""');

		st.end();
	});

	t.test('generic flags', function (st) {
		st.equal(flags({}), '');
		st.equal(flags({ ignoreCase: true }), 'i');
		st.equal(flags({ dotAll: 1, global: 0, sticky: 1, unicode: 1 }), 'suy');
		st.equal(flags({ __proto__: { multiline: true } }), 'm');

		var obj = {};
		forEach(availableFlags, function (flag) {
			if (flag !== 'v') {
				obj[regexProperties[flag]] = true;
			}
		});
		st.equal(flags(obj), sortedFlags.replace('v', ''), 'an object with every available flag: ' + sortedFlags);

		st.end();
	});

	t.test('getters', { skip: !supportsDescriptors }, function (st) {
		/* eslint getter-return: 0 */
		var calls = '';
		var re = {};
		Object.defineProperty(re, 'hasIndices', {
			get: function () {
				calls += 'd';
			}
		});
		Object.defineProperty(re, 'global', {
			get: function () {
				calls += 'g';
			}
		});
		Object.defineProperty(re, 'ignoreCase', {
			get: function () {
				calls += 'i';
			}
		});
		Object.defineProperty(re, 'multiline', {
			get: function () {
				calls += 'm';
			}
		});
		Object.defineProperty(re, 'dotAll', {
			get: function () {
				calls += 's';
			}
		});
		Object.defineProperty(re, 'unicode', {
			get: function () {
				calls += 'u';
			}
		});
		Object.defineProperty(re, 'sticky', {
			get: function () {
				calls += 'y';
			}
		});

		flags(re);

		st.equal(calls, 'dgimsuy', 'getters are called in expected order');

		st.end();
	});
};
