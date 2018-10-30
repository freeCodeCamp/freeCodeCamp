"use strict";

module.exports = {
	"__generic": function (t, a) {
		a(t.call(this).length, 3);
	},
	"": function (t, a) {
		var o, x, y, z;
		o = {};
		x = [0, 1, "", null, o, false, undefined, true];
		y = x.slice(0);

		a.not(z = t.call(x), x, "Returns different object");
		a.deep(x, y, "Origin not changed");
		a.deep(z, [0, 1, "", o, false, true], "Result");
	}
};
