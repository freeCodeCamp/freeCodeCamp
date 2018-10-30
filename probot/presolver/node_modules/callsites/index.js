'use strict';
module.exports = () => {
	const _ = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	const stack = new Error().stack.slice(1);
	Error.prepareStackTrace = _;
	return stack;
};
