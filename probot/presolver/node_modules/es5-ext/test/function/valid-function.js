"use strict";

module.exports = function (t, a) {
	var f = function () {};
	a(t(f), f, "Function");
	// eslint-disable-next-line no-new-func
	f = new Function();
	a(t(f), f, "Function");
	a.throws(function () {
		t({});
	}, "Object");
	a.throws(function () {
		t(/re/);
	}, "RegExp");
	a.throws(function () {
		t({
			call: function () {
				return 20;
			}
		});
	}, "Plain object");
};
