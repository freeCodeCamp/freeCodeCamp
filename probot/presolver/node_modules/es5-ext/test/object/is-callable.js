"use strict";

module.exports = function (t, a) {
	a(t(function () {}), true, "Function");
	a(t({}), false, "Object");
	a(t(), false, "Undefined");
	a(t(null), false, "Null");
};
