'use strict';

const callsites = () => {
	const _prepareStackTrace = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	const stack = new Error().stack.slice(1);
	Error.prepareStackTrace = _prepareStackTrace;
	return stack;
};

module.exports = callsites;
// TODO: Remove this for the next major release
module.exports.default = callsites;
