// Taken from: https://github.com/walling/unorm/blob/master/test/es6-shim.js

"use strict";

var str = "äiti";

module.exports = function (t, a) {
	a(t.call(str), "\u00e4iti");
	a(t.call(str, "NFC"), "\u00e4iti");
	a(t.call(str, "NFD"), "a\u0308iti");
	a(t.call(str, "NFKC"), "\u00e4iti");
	a(t.call(str, "NFKD"), "a\u0308iti");
};
