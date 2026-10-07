"use strict";

module.exports = function (t, a, d) {
	var invoked, id;
	id = setTimeout(function () {
 invoked = true;
}, t);
	setTimeout(function () {
		a(invoked, undefined);
		clearTimeout(id);
		d();
	}, 100);
};
