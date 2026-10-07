'use strict';

// this should only run in node >= 13.2, so it
// does not need any of the intense fallbacks that old node/browsers do

var $iterator = Symbol.iterator;
module.exports = function getIterator(iterable) {
	// alternatively, `iterable[$iterator]?.()`
	if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
		return iterable[$iterator]();
	}
};
