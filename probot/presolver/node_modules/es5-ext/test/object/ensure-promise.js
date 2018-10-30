"use strict";

module.exports = function (t, a) {
	var promise;
	a.throws(function () {
 t();
}, TypeError);
	a.throws(function () {
 t(null);
}, TypeError);
	a.throws(function () {
 t("promise");
}, TypeError);
	a.throws(function () {
 t({});
}, TypeError);
	a.throws(function () {
 t(function () {});
}, TypeError);
	a.throws(function () {
 t({ then: {} });
}, TypeError);
	promise = { then: function () {} };
	a(t(promise), promise);
	promise = function () {};
	promise.then = {};
	a.throws(function () {
 t(promise);
}, TypeError);
	promise.then = function () {};
	a(t(promise), promise);
};
