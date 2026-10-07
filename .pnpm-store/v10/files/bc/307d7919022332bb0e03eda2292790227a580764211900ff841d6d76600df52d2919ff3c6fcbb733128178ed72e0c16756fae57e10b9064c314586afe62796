// Exports true if environment provides native `WeakMap` implementation, whatever that is.

"use strict";

module.exports = (function () {
	if (typeof WeakMap !== "function") return false;
	return Object.prototype.toString.call(new WeakMap()) === "[object WeakMap]";
}());
