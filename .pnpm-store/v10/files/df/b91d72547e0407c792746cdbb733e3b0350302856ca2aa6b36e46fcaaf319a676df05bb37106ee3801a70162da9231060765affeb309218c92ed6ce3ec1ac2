'use strict';

var NumberToString = require('./Number/toString');
var StringIndexOf = require('./StringIndexOf');
var StringPad = require('./StringPad');
// var StringToCodePoints = require('./StringToCodePoints');
var UnicodeEscape = require('./UnicodeEscape');
var UTF16EncodeCodePoint = require('./UTF16EncodeCodePoint');

var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

var $TypeError = require('es-errors/type');

var isCodePoint = require('../helpers/isCodePoint');
var forEach = require('for-each');
var regexTester = require('safe-regex-test');

var isWhiteSpace = regexTester(/^\s$/);
var isLineTerminator = regexTester(/^[\n\r\u2028\u2029]$/);

// var punctuators = "(){}[]|,.?*+-^$=<>/#&!%:;@~'`\"\\"; // step 1
var syntaxCharacter = '^$\\.*+?()[]{}|';

var otherPunctuators = ",-=<>#&!%:;@~'`\""; // step 3
// var toEscape = StringToCodePoints(otherPunctuators); // step 4

var table64 = {
	'\u0009': 't',
	'\u000a': 'n',
	'\u000b': 'v',
	'\u000c': 'f',
	'\u000d': 'r',
	__proto__: null
};

module.exports = function EncodeForRegExpEscape(c) {
	if (!isCodePoint(c)) {
		throw new $TypeError('Assertion failed: `c` must be a valid Unicode code point');
	}

	var encoded = UTF16EncodeCodePoint(c);

	if (StringIndexOf(syntaxCharacter, encoded, 0) > -1 || encoded === '\u002F') { // step 1
		return '\\' + encoded; // step 1.a
	} else if (encoded in table64) { // step 2
		return '\\' + table64[encoded]; // step 2.a
	}

	if (
		StringIndexOf(otherPunctuators, encoded, 0) > -1
		|| isWhiteSpace(encoded)
		|| isLineTerminator(encoded)
		|| isLeadingSurrogate(c)
		|| isTrailingSurrogate(c)
	) { // step 5
		if (c < 0xFF) { // step 5.a
			var hex = NumberToString(c, 16); // step 5.a.i
			return '\\x' + StringPad(hex, 2, '0', 'START'); // step 5.a.ii
		}

		var escaped = ''; // step 5.b

		var codeUnits = encoded; // step 5.c

		forEach(codeUnits, function (cu) { // step 5.d
			escaped += UnicodeEscape(cu); // step 5.d.i
		});

		return escaped; // step 5.e
	}

	return encoded; // step 6
};
