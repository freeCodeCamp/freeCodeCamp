"use strict";

var forOf      = require("es6-iterator/for-of")
  , isIterable = require("es6-iterator/is-iterable")
  , iterable   = require("./validate")

  , forEach = Array.prototype.forEach;

module.exports = function (target, cb/*, thisArg*/) {
	if (isIterable(iterable(target))) forOf(target, cb, arguments[2]);
	else forEach.call(target, cb, arguments[2]);
};
