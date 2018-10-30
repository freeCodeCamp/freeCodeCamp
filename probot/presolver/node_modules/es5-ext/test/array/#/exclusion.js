"use strict";

module.exports = {
	"__generic": function (t, a) {
		var x = {};
		a.deep(t.call(this, this, [this[0], this[2], x]), [x]);
	},
	"": function (t, a) {
		var x = {}, y = {};

		a.deep(t.call([x, y]), [x, y], "No arguments");
		a.deep(t.call([x, 1], [], []), [x, 1], "Empty arguments");
		a.deep(t.call([1, "raz", x], [2, "raz", y], [2, "raz", x]), [1, y]);
	}
};
