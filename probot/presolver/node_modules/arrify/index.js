'use strict';
module.exports = function (val) {
	if (val === null || val === undefined) {
		return [];
	}

	return Array.isArray(val) ? val : [val];
};
