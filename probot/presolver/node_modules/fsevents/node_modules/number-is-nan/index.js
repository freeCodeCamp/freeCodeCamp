'use strict';
module.exports = Number.isNaN || function (x) {
	return x !== x;
};
