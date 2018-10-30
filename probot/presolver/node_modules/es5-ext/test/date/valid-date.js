"use strict";

module.exports = function (t, a) {
	var d = new Date();
	a(t(d), d, "Date");
	a.throws(function () {
		t({});
	}, "Object");
	a.throws(function () {
		t({ valueOf: function () {
 return 20;
} });
	}, "Number object");
};
