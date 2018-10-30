"use strict";

module.exports = function (t, a) {
	t = t({
		a: "A",
		aa: "B",
		ab: "C",
		b: "D",
		c: function () {
			return ++this.a;
		}
	});
	a(t.call({ a: 0 }, " %a%aab%abb%b\\%aa%ab%c%c "), " ABbCbD%aaC12 ");
};
