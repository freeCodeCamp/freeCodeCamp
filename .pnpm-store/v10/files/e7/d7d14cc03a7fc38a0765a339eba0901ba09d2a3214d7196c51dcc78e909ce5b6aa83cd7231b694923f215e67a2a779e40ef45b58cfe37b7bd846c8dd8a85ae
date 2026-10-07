"use strict";

var test = function (arg1, arg2) { return arg2; };

try {
	Object.defineProperty(test, "length", {
		configurable: true,
		writable: false,
		enumerable: false,
		value: 1
	});
}
catch (ignore) {}

if (test.length === 1) {
	// ES2015+
	var desc = { configurable: true, writable: false, enumerable: false };
	module.exports = function (length, fn) {
		if (fn.length === length) return fn;
		desc.value = length;
		return Object.defineProperty(fn, "length", desc);
	};
	return;
}

module.exports = function (length, fn) {
	if (fn.length === length) return fn;
	switch (length) {
		case 0:
			return function () { return fn.apply(this, arguments); };
		case 1:
			return function (ignored1) { return fn.apply(this, arguments); };
		case 2:
			return function (ignored1, ignored2) { return fn.apply(this, arguments); };
		case 3:
			return function (ignored1, ignored2, ignored3) { return fn.apply(this, arguments); };
		case 4:
			return function (ignored1, ignored2, ignored3, ignored4) {
				return fn.apply(this, arguments);
			};
		case 5:
			return function (ignored1, ignored2, ignored3, ignored4, ignored5) {
				return fn.apply(this, arguments);
			};
		case 6:
			return function (ignored1, ignored2, ignored3, ignored4, ignored5, ignored6) {
				return fn.apply(this, arguments);
			};
		case 7:
			return function (ignored1, ignored2, ignored3, ignored4, ignored5, ignored6, ignored7) {
				return fn.apply(this, arguments);
			};
		default:
			throw new Error("Usupported function length");
	}
};
