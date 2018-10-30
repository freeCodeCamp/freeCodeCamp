"use strict";

module.exports = function (t, a) {
	a.deep(t({ foo: "bar" }), ["foo"], "Object");
	a.deep(t("raz"), ["0", "1", "2"], "Primitive");
	a.throws(function () { t(); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Undefined");
};
