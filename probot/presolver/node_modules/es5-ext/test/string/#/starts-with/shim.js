// Inspired and in some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog
// /string/string_test.html

"use strict";

module.exports = function (t, a) {
	a(t.call("abc", ""), true, "Empty needle");
	a(t.call("abcd", "ab"), true, "Starts with needle");
	a(t.call("abcd", "abcd"), true, "Needle equals haystack");
	a(t.call("abcd", "bcde", 1), false, "Needle larger than haystack");
	a(!t.call("abcd", "cd"), true, "Doesn't start with needle");
	a(t.call("abcd", "bc", 1), true, "Position");
};
