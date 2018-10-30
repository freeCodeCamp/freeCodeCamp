"use strict";

module.exports = function (t, a) {
	var e = new Error();
	try {
		t.call(e);
	} catch (e2) {
		a(e2, e);
	}
};
