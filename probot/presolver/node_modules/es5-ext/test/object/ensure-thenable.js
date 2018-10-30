"use strict";

module.exports = function (t, a) {
	// Just sanity checks as proper tests are at isThenable
	var thenable = { then: function () {} };

	a.throws(function () {
		t({});
	}, TypeError);
	a(t(thenable), thenable);
};
