"use strict";

module.exports = function (t, a) {
	a(t.call("raz"), "raz", "Word");
	a(t.call("BLA"), "bLA", "Uppercase");
	a(t.call(""), "", "Empty");
	a(t.call("a"), "a", "One letter");
	a(t.call("this is a test"), "this is a test", "Sentence");
	a(t.call("This is a test"), "this is a test", "Capitalized sentence");
};
