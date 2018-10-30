"use strict";

var o = {};

module.exports = function (t, a) {
	a(t(o)(), o);
};
