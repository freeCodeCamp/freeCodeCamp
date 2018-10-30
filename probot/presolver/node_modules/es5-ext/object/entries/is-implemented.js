"use strict";

module.exports = function () {
	try {
		return Object.entries({ foo: 12 })[0][0] === "foo";
	} catch (e) {
		return false;
	}
};
