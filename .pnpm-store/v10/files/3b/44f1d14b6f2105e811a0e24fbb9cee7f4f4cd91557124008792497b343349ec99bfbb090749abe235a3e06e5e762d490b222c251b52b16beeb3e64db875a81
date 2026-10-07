"use strict";

module.exports = function () {
	var dummyRegExp = /a/;
	// We need to do check on instance and not on prototype due to how ES2015 spec evolved:
	// https://github.com/tc39/ecma262/issues/262
	// https://github.com/tc39/ecma262/pull/263
	// https://bugs.chromium.org/p/v8/issues/detail?id=4617
	return "sticky" in dummyRegExp;
};
