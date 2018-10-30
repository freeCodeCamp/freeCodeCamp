"use strict";

module.exports = function (t, a) {
	a.deep(t({ foo: "bar" }), [["foo", "bar"]], "Object");
	a.deep(t("raz"), [["0", "r"], ["1", "a"], ["2", "z"]], "Primitive");
	a.throws(function () { t(); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Undefined");
};
