"use strict";

module.exports = function (t, a) {
	a(t.call("ra\nzz", ""), "ra\nzz", "Empty");
	a(t.call("ra\nzz", "\t", 3), "\t\t\tra\n\t\t\tzz", "String repeat");
	a(t.call("ra\nzz\nsss\nfff\n", "\t"), "\tra\n\tzz\n\tsss\n\tfff\n",
		"Multi-line");
	a(t.call("ra\n\nzz\n", "\t"), "\tra\n\n\tzz\n", "Don't touch empty lines");
};
