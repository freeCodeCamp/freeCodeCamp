"use strict";

module.exports = {
	"__generic": function (t, a) {
		var count = 0, self;

		self = Object(this);
		a.deep(t.call(self, function (v, i, scope) {
			a(v, this[i], "Value");
			a(i, count++, "Index");
			a(scope, this, "Scope");
			return i;
		}, self), { 0: [this[0]], 1: [this[1]], 2: [this[2]] });
	},
	"": function (t, a) {
		var r;
		r = t.call([2, 3, 3, 4, 5, 6, 7, 7, 23, 45, 34, 56],
			function (v) {
				return v % 2 ? "odd" : "even";
			});
		a.deep(r.odd, [3, 3, 5, 7, 7, 23, 45]);
		a.deep(r.even, [2, 4, 6, 34, 56]);
	}
};
