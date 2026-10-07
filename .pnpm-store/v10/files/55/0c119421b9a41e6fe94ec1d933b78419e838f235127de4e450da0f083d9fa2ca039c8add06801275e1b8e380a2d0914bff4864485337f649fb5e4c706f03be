"use strict";

var globalObj = require("es5-ext/global")
  , polyfill  = require("../polyfill");

module.exports = function (t, a) {
	var cache;

	a(typeof t(), "boolean");
	cache = globalObj.WeakMap;
	globalObj.WeakMap = polyfill;
	a(t(), true);
	if (cache === undefined) delete globalObj.WeakMap;
	else globalObj.WeakMap = cache;
};
