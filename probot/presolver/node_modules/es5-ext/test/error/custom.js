"use strict";

module.exports = function (t, a) {
	var T = t, err = new T("My Error", "MY_ERROR", { errno: 123 });
	a(err instanceof Error, true, "Instance of error");
	a(err.constructor, Error, "Constructor");
	a(err.name, "Error", "Name");
	a(String(err), "Error: My Error", "String representation");
	a(err.code, "MY_ERROR", "Code");
	a(err.errno, 123, "Errno");
	a(typeof err.stack, "string", "Stack trace");
};
