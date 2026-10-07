"use strict";

module.exports = function () {
	var weakMap, obj;

	if (typeof WeakMap !== "function") return false;
	try {
		// WebKit doesn't support arguments and crashes
		weakMap = new WeakMap([[obj = {}, "one"], [{}, "two"], [{}, "three"]]);
	} catch (e) {
		return false;
	}
	if (String(weakMap) !== "[object WeakMap]") return false;
	if (typeof weakMap.set !== "function") return false;
	if (weakMap.set({}, 1) !== weakMap) return false;
	if (typeof weakMap.delete !== "function") return false;
	if (typeof weakMap.has !== "function") return false;
	if (weakMap.get(obj) !== "one") return false;

	return true;
};
