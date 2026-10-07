'use strict';

module.exports = function (trimEnd, t) {
	t.test('normal cases', function (st) {
		st.equal(trimEnd(' \t\na \t\n'), ' \t\na', 'strips whitespace off the left side');
		st.equal(trimEnd('a'), 'a', 'noop when no whitespace');

		var allWhitespaceChars = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
		st.equal(trimEnd(allWhitespaceChars + 'a' + allWhitespaceChars), allWhitespaceChars + 'a', 'all expected whitespace chars are trimmed');

		st.end();
	});

	// see https://codeblog.jonskeet.uk/2014/12/01/when-is-an-identifier-not-an-identifier-attack-of-the-mongolian-vowel-separator/
	var mongolianVowelSeparator = '\u180E';
	var mvsIsWS = (/^\s$/).test(mongolianVowelSeparator);
	t.test('mongolian vowel separator: unicode >= 4 && < 6.3', function (st) {
		st.equal(
			trimEnd(mongolianVowelSeparator + 'a' + mongolianVowelSeparator),
			mongolianVowelSeparator + 'a' + (mvsIsWS ? '' : mongolianVowelSeparator),
			'mongolian vowel separator is ' + (mvsIsWS ? '' : 'not ') + 'whitespace'
		);
		st.end();
	});

	t.test('zero-width spaces', function (st) {
		var zeroWidth = '\u200b';
		st.equal(trimEnd(zeroWidth), zeroWidth, 'zero width space does not trim');
		st.end();
	});
};
