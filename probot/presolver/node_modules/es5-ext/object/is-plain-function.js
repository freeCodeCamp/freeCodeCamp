"use strict";

var isClassStr = RegExp.prototype.test.bind(/^\s*class[\s{/}]/)
  , fnToString = Function.prototype.toString;

module.exports = function (fn) {
	if (typeof fn !== "function") return false;
	if (typeof fn.call !== "function") return false;
	if (typeof fn.apply !== "function") return false;
	return !isClassStr(fnToString.call(fn));
};
