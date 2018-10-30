"use strict";

module.exports = function (t, a) {
	a.deep(t.call(/\|/, "bar|foo"), ["bar", "foo"]);
};
