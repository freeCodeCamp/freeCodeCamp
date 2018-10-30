"use strict";

module.exports = function (t, a) {
	a.throws(function () {
		t.call("", "");
	});
	a(t.call("x", "x"), 1);
	a(t.call("xx", "x"), 2);
	a(t.call("xxx", "xx"), 1);
	a(t.call("xxxx", "xx"), 2);
	a(t.call("xx", "xxx"), 0);
	a(t.call("", "elo"), 0);
	a(t.call("fooo", "foofooo"), 0);
};
