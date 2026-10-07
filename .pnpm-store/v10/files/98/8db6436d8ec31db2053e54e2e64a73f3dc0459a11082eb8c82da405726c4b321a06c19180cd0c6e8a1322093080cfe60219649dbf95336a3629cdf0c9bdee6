'use strict';

module.exports = function reduce(arr, fn, init) {
	var acc = init;
	for (var i = 0; i < arr.length; i += 1) {
		acc = fn(acc, arr[i], i);
	}
	return acc;
};
