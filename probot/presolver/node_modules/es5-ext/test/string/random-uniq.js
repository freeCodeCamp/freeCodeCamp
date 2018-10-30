"use strict";

var isValidFormat = RegExp.prototype.test.bind(/^[a-z0-9]+$/);

module.exports = function (t, a) {
	a(typeof t(), "string");
	a.ok(t().length > 7);
	a.not(t(), t());
	a.ok(isValidFormat(t()));
	a.ok(isValidFormat(t()));
	a.ok(isValidFormat(t()));
	a.ok(isValidFormat(t()));
	a.ok(isValidFormat(t()));
};
