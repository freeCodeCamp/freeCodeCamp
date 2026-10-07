'use strict';

module.exports = function isSameType(x, y) {
	if (x === y) {
		return true;
	}

	if (typeof x === typeof y) {
		if (typeof x !== 'object' || typeof y !== 'object') {
			return true;
		}
		return !!x === !!y;
	}

	return false;
};
