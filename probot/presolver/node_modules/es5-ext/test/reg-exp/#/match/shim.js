"use strict";

module.exports = function (t, a) {
	var result = "foobar".match(/foo/);
	a.deep(t.call(/foo/, "foobar"), result);
};
