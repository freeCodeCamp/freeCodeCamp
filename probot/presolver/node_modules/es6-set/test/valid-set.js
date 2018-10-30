'use strict';

var SetPoly = require('../polyfill');

module.exports = function (t, a) {
	var set;
	a.throws(function () { t(undefined); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Null");
	a.throws(function () { t(true); }, TypeError, "Primitive");
	a.throws(function () { t('raz'); }, TypeError, "String");
	a.throws(function () { t({}); }, TypeError, "Object");
	a.throws(function () { t([]); }, TypeError, "Array");
	if (typeof Set !== 'undefined') {
		set = new Set();
		a(t(set), set, "Native");
	}
	set = new SetPoly();
	a(t(set), set, "Polyfill");
};
