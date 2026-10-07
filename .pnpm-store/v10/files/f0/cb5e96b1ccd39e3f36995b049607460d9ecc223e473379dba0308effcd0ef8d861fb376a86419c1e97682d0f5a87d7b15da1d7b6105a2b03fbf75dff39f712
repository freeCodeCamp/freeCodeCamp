"use strict";

var callable     = require("es5-ext/object/valid-callable")
  , validTimeout = require("./valid-timeout")

  , apply = Function.prototype.apply;

module.exports = function (fn, timeout) {
	var isScheduled = false, context, args, run;
	callable(fn);
	timeout = validTimeout(timeout);
	run = function () {
		var currentContext = context, currentArgs = args;
		if (!args) {
			isScheduled = false;
			return;
		}
		context = null;
		args = null;
		setTimeout(run, timeout);
		apply.call(fn, currentContext, currentArgs);
	};
	return function () {
		if (isScheduled) {
			context = this;
			args = arguments;
			return;
		}
		isScheduled = true;
		setTimeout(run, timeout);
		apply.call(fn, this, arguments);
	};
};
