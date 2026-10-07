"use strict";

var isFunction = require("../function/is");

var constructorRe = /^\s*(?:class[\s{/}]|function[\s(])/
  , functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (!constructorRe.test(functionToString.call(value))) return false;
	return true;
};
