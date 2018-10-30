"use strict";

module.exports = function (t, a) {
	var obj = { foo: { bar: "elo", par: null } };
	a(t(), undefined);
	a(t(null), null);
	a(t(obj), obj);
	a(t(obj, "foo"), obj.foo);
	a(t(obj, "foo", "bar"), "elo");
	a(t(obj, "foo", "bar", "slice"), String.prototype.slice);
	a(t(obj, "foo", "par"), null);
	a(t(obj, "foo", "par", "marko"), undefined);
	a(t(obj, "marko"), undefined);
	a(t(""), "");
	a(t("", "foo"), undefined);
	a(t("", "slice"), String.prototype.slice);
};
