"use strict";

module.exports = function (t, a) {
	a(t.call(/foo/, "foobar", "mar"), "marbar");
};
