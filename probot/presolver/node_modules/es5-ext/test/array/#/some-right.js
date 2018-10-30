"use strict";

module.exports = {
	"__generic": function (t, a) {
		var count = 0, first, last, x, icount = this.length;
		t.call(this, function (item, index, col) {
			++count;
			if (!first) {
				first = item;
			}
			last = item;
			x = col;
			a(index, --icount, "Index");
		});
		a(count, this.length, "Iterated");
		a(first, this[this.length - 1], "First is last");
		a(last, this[0], "Last is first");
		a.deep(x, Object(this), "Collection as third argument"); // Jslint: skip
	},
	"": function (t, a) {
		var x = {}, y, count;
		t.call(
			[1],
			function () {
				y = this;
			},
			x
		);
		a(y, x, "Scope");
		y = 0;
		t.call([3, 4, 4], function (a, i) {
			y += i;
		});
		a(y, 3, "Indexes");

		x = [1, 3];
		x[5] = "x";
		y = 0;
		count = 0;
		a(
			t.call(x, function (a, i) {
				++count;
				y += i;
			}),
			false,
			"Return"
		);
		a(y, 6, "Misssing Indexes");
		a(count, 3, "Misssing Indexes, count");

		count = 0;
		a(
			t.call([-2, -3, -4, 2, -5], function (item) {
				++count;
				return item > 0;
			}),
			true,
			"Return"
		);
		a(count, 2, "Break after true is returned");
	}
};
