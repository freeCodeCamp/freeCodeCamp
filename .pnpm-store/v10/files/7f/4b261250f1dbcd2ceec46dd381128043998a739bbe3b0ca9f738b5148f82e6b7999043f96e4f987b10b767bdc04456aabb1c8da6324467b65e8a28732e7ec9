"use strict";

var isCallable = require("../object/is-callable")
  , value      = require("../object/valid-value")
  , call       = Function.prototype.call;

module.exports = function (fmap) {
	fmap = Object(value(fmap));
	return function (pattern) {
		var context = this;
		value(context);
		pattern = String(pattern);
		return pattern.replace(
			/%([a-zA-Z]+)|\\([\u0000-\uffff])/g,
			function (match, token, escapeChar) {
				var t, result;
				if (escapeChar) return escapeChar;
				t = token;
				while (t && !(result = fmap[t])) t = t.slice(0, -1);
				if (!result) return match;
				if (isCallable(result)) result = call.call(result, context);
				return result + token.slice(t.length);
			}
		);
	};
};
