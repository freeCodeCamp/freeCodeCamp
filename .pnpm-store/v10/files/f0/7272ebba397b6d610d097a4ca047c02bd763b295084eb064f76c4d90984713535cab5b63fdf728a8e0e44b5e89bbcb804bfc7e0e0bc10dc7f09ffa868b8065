'use strict';

// https://262.ecma-international.org/16.0/#sec-sametype

module.exports = function SameType(x, y) {
	if (x === y) {
		return true;
	}
	if (
		(x === null && y !== null)
        || (x !== null && y === null)
	) {
		return false;
	}
	return typeof x === typeof y;
};
