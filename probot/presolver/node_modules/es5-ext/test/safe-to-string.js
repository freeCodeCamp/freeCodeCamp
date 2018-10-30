"use strict";

module.exports = function (t, a) {
	a(t(), "undefined");
	a(t(null), "null");
	a(t(10), "10");
	a(t("str"), "str");
	a(t({ toString: function () { return "miszka"; } }), "miszka");
	// eslint-disable-next-line symbol-description
	if (typeof Symbol === "function") a(t(Symbol()), "Symbol()");
	a(t(Object.create(null)), "<Non-coercible to string value>");
};
