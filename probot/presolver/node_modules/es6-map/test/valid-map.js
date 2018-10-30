'use strict';

var MapPoly = require('../polyfill');

module.exports = function (t, a) {
	var map;
	a.throws(function () { t(undefined); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Null");
	a.throws(function () { t(true); }, TypeError, "Primitive");
	a.throws(function () { t('raz'); }, TypeError, "String");
	a.throws(function () { t({}); }, TypeError, "Object");
	a.throws(function () { t([]); }, TypeError, "Array");
	if (typeof Map !== 'undefined') {
		map = new Map();
		a(t(map), map, "Native");
	}
	map = new MapPoly();
	a(t(map), map, "Polyfill");
};
