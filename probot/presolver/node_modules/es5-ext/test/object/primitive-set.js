"use strict";

var getPropertyNames = require("../../object/get-property-names")
  , isPlainObject    = require("../../object/is-plain-object");

module.exports = function (t, a) {
	var x = t();
	a(isPlainObject(x), true, "Plain object");
	a.deep(getPropertyNames(x), [], "No properties");
	x.foo = "bar";
	a.deep(getPropertyNames(x), ["foo"], "Extensible");

	a.deep(t("raz", "dwa", 3), { raz: true, dwa: true, 3: true },
		"Arguments handling");
};
