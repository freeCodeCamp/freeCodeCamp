// It's actually "debounce"

"use strict";

var isValue      = require("es5-ext/object/is-value")
  , callable     = require("es5-ext/object/valid-callable")
  , nextTick     = require("next-tick")
  , validTimeout = require("./valid-timeout");

var apply = Function.prototype.apply;

module.exports = function (fn/*, timeout*/) {
	var scheduled, run, context, args, delay, timeout = arguments[1], handle;
	callable(fn);
	if (isValue(timeout)) {
		timeout = validTimeout(timeout);
		delay = setTimeout;
	} else {
		delay = nextTick;
	}
	run = function () {
		if (!scheduled) return; // IE8 tends to not clear immediate timeouts properly
		scheduled = false;
		handle = null;
		apply.call(fn, context, args);
		context = null;
		args = null;
	};
	return function () {
		if (scheduled) {
			if (!isValue(handle)) {
				// 'nextTick' based, no room for debounce
				return;
			}
			clearTimeout(handle);
		}
		scheduled = true;
		context = this;
		args = arguments;
		handle = delay(run, timeout);
	};
};
