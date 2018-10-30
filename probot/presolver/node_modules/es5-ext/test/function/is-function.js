"use strict";

var o = { call: Function.prototype.call, apply: Function.prototype.apply };

module.exports = function (t, a) {
	a(t(function () {}), true, "Function is function");
	a(t(o), false, "Plain object is not function");
};
