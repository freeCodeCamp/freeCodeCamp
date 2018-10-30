"use strict";

var o = { foo: "bar" };

module.exports = function (t, a) {
	a(t("foo")(o), o.foo);
};
