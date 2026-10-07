"use strict";

var callable     = require("es5-ext/object/valid-callable")
  , nextTick     = require("next-tick")
  , validTimeout = require("./valid-timeout");

var apply = Function.prototype.apply;

module.exports = function (fn/*, timeout*/) {
	var delay, timeout = arguments[1];
	callable(fn);
	if (timeout === undefined) {
		delay = nextTick;
	} else {
		timeout = validTimeout(timeout);
		delay = setTimeout;
	}
	return function () {
		return delay(apply.bind(fn, this, arguments), timeout);
	};
};
