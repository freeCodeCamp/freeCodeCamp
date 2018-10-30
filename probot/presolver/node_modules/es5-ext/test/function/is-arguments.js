"use strict";

module.exports = function (t, a) {
	var args, dummy;
	args = (function () {
 return arguments;
}());
	dummy = { 0: 1, 1: 2 };
	Object.defineProperty(dummy, "length", { value: 2 });
	a(t(args), true, "Arguments");
	a(t(dummy), false, "Dummy");
	a(t([]), false, "Array");
};
