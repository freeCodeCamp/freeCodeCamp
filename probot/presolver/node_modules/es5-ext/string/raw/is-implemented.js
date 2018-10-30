"use strict";

module.exports = function () {
	var raw = String.raw, test;
	if (typeof raw !== "function") return false;
	test = ["foo\nbar", "marko\n"];
	test.raw = ["foo\\nbar", "marko\\n"];
	return raw(test, "INSE\nRT") === "foo\\nbarINSE\nRTmarko\\n";
};
