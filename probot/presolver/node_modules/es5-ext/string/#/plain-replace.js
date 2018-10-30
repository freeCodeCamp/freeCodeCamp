"use strict";

var indexOf = String.prototype.indexOf, slice = String.prototype.slice;

module.exports = function (search, replace) {
	var index = indexOf.call(this, search);
	if (index === -1) return String(this);
	return slice.call(this, 0, index) + replace +
		slice.call(this, index + String(search).length);
};
