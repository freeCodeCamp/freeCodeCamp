"use strict";

var WeakMapPoly = require("../polyfill");

module.exports = function (t, a) {
	var map;

	a.throws(function () {
		t(undefined);
	}, TypeError, "Undefined");
	a.throws(function () {
		t(null);
	}, TypeError, "Null");
	a.throws(function () {
		t(true);
	}, TypeError, "Primitive");
	a.throws(function () {
		t("raz");
	}, TypeError, "String");
	a.throws(function () {
		t({});
	}, TypeError, "Object");
	a.throws(function () {
		t([]);
	}, TypeError, "Array");
	if (typeof WeakMap !== "undefined") {
		map = new WeakMap();
		a(t(map), map, "Native");
	}
	map = new WeakMapPoly();
	a(t(map), map, "Polyfill");
};
