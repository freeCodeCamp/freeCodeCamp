"use strict";

var toArray = require("../../../array/to-array");

module.exports = {
	"__generic": function (t, a) {
		a.deep(t.call(this, this, this), toArray(this));
	},
	"": function (t, a) {
		var x = {}, y = {}, p, r;
		a.deep(t.call([], [2, 3, 4]), [], "Empty #1");
		a.deep(t.call([2, 3, 4], []), [], "Empty #2");
		a.deep(t.call([2, 3, x], [y, 5, 7]), [], "Different");
		p = t.call([3, 5, "raz", {}, "dwa", x], [1, 3, "raz", "dwa", "trzy", x, {}],
			[3, "raz", x, 65]);
		r = [3, "raz", x];
		p.sort();
		r.sort();
		a.deep(p, r, "Same parts");
		a.deep(t.call(r, r), r, "Same");
		a.deep(t.call([1, 2, x, 4, 5, y, 7], [7, y, 5, 4, x, 2, 1]),
			[1, 2, x, 4, 5, y, 7], "Long reverse same");
	}
};
