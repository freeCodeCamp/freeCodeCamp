"use strict";

module.exports = function (t, a) {
	var r = /raz/;
	a(t(r), r, "Direct");
	r = new RegExp("foo");
	a(t(r), r, "Constructor");
	a.throws(function () {
		t({});
	}, "Object");
	a.throws(function () {
		t(function () {});
	}, "Function");
	a.throws(function () {
		t({ exec: function () {
 return 20;
} });
	}, "Plain object");
};
