"use strict";

module.exports = {
	"__generic": function (t, a) {
		a(t.call(this, this[1]), true, "Contains");
		a(t.call(this, {}), false, "Does Not contain");
	},
	"": function (t, a) {
		var o, x = {}, y = {};

		o = [1, "raz", x];

		a(t.call(o, 1), true, "First");
		a(t.call(o, "1"), false, "Type coercion");
		a(t.call(o, "raz"), true, "Primitive");
		a(t.call(o, "foo"), false, "Primitive not found");
		a(t.call(o, x), true, "Object found");
		a(t.call(o, y), false, "Object not found");
		a(t.call(o, 1, 1), false, "Position");
	}
};
