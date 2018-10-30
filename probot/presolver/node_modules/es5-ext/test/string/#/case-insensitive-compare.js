"use strict";

module.exports = function (t, a) {
	a(t.call("AA", "aa"), 0, "Same");
	a.ok(t.call("Amber", "zebra") < 0, "Less");
	a.ok(t.call("Zebra", "amber") > 0, "Greater");
};
