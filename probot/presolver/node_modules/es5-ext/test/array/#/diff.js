"use strict";

module.exports = {
	"__generic": function (t, a) {
		a.deep(t.call(this, this), []);
	},
	"": function (t, a) {
		var x = {}, y = {};

		a.deep(t.call([1, "raz", x, 2, "trzy", y], [x, 2, "trzy"]), [1, "raz", y],
			"Scope longer");
		a.deep(t.call([1, "raz", x], [x, 2, "trzy", 1, y]), ["raz"],
			"Arg longer");
		a.deep(t.call([1, "raz", x], []), [1, "raz", x], "Empty arg");
		a.deep(t.call([], [1, y, "sdfs"]), [], "Empty scope");
	}
};
