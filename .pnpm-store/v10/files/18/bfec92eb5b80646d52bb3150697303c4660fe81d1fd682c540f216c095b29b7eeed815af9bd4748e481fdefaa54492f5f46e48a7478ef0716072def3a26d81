'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!String.prototype.trimEnd && !String.prototype.trimRight) {
		return implementation;
	}
	var zeroWidthSpace = '\u200b';
	var trimmed = zeroWidthSpace.trimEnd ? zeroWidthSpace.trimEnd() : zeroWidthSpace.trimRight();
	if (trimmed !== zeroWidthSpace) {
		return implementation;
	}
	return String.prototype.trimEnd || String.prototype.trimRight;
};
