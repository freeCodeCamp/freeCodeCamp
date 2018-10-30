"use strict";

var getMonth = Date.prototype.getMonth;

module.exports = function () {
	switch (getMonth.call(this)) {
	case 1:
		return this.getFullYear() % 4 ? 28 : 29;
	case 3:
	case 5:
	case 8:
	case 10:
		return 30;
	default:
		return 31;
	}
};
