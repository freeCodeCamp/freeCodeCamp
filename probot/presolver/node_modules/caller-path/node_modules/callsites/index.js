'use strict';
module.exports = function () {
	var _ = Error.prepareStackTrace;
	Error.prepareStackTrace = function (_, stack) { return stack };
	var stack = new Error().stack.slice(1);
	Error.prepareStackTrace = _;
	return stack;
};
