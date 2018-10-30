'use strict';
module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};
