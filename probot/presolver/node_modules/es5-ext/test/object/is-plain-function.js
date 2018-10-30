"use strict";

var setPrototypeOf = require("../../object/set-prototype-of");

module.exports = function (t, a) {
	a(t(function () {}), true, "Function");
	a(t({}), false, "Object");
	a(t(), false, "Undefined");
	a(t(null), false, "Null");
	if (setPrototypeOf) {
		a(
			t(Object.setPrototypeOf(function () {}, Object.prototype)),
			false,
			"Function with non-function prototype"
		);
	}
	var arrowfn;
	try {
		arrowfn = eval("(() => {})");
	} catch (e) {}
	if (arrowfn) {
		a(t(arrowfn), true, "Arrow function");
	}

	var classFn;
	try {
		classFn = eval("(class {})");
	} catch (e) {}
	if (classFn) {
		a(t(classFn), false, "Class");
	}

	var commentedClassFn;
	try {
		// Follows issue reported to ljhard/is-callable project:
		// https://github.com/ljharb/is-callable/issues/4
		commentedClassFn = eval("(class/*kkk*/\n//blah\n Bar\n//blah\n {})");
	} catch (e) {}
	if (commentedClassFn) {
		a(t(commentedClassFn, false, "Class"), false, "Class with comments");
	}
};
