// In some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/
// string/string_test.html

"use strict";

module.exports = function (t, a) {
	a(t.call("abc", ""), true, "Empty needle");
	a(t.call("abcd", "cd"), true, "Ends with needle");
	a(t.call("abcd", "abcd"), true, "Needle equals haystack");
	a(t.call("abcd", "ab"), false, "Doesn't end with needle");
	a(t.call("abc", "defg"), false, "Length trick");
	a(t.call("razdwa", "zd", 3), false, "Position: false");
	a(t.call("razdwa", "zd", 4), true, "Position: true");
	a(t.call("razdwa", "zd", 5), false, "Position: false #2");
};
