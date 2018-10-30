"use strict";

module.exports = function (t, a) {
	var x = {}, y = Object.create(null);
	a(t(x), null, "Normal: Empty");
	a(t(y), null, "Null extension: Empty");
	x.foo = "raz";
	x.bar = 343;
	a(["foo", "bar"].indexOf(t(x)) !== -1, true, "Normal");
	y.elo = "foo";
	y.mar = "wew";
	a(["elo", "mar"].indexOf(t(y)) !== -1, true, "Null extension");
};
