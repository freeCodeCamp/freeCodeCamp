'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!String.prototype.trimStart && !String.prototype.trimLeft) {
		return implementation;
	}
	var zeroWidthSpace = '\u200b';
	var trimmed = zeroWidthSpace.trimStart ? zeroWidthSpace.trimStart() : zeroWidthSpace.trimLeft();
	if (trimmed !== zeroWidthSpace) {
		return implementation;
	}
	return String.prototype.trimStart || String.prototype.trimLeft;
};
