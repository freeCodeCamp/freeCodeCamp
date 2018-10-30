"use strict";

module.exports = function (t, a) {
	a(t.call("raz"), "Raz", "Word");
	a(t.call("BLA"), "BLA", "Uppercase");
	a(t.call(""), "", "Empty");
	a(t.call("a"), "A", "One letter");
	a(t.call("this is a test"), "This is a test", "Sentence");
};
