'use strict';

var IsUnclampedIntegerElementType = require('./IsUnclampedIntegerElementType');
var IsBigIntElementType = require('./IsBigIntElementType');

// https://262.ecma-international.org/11.0/#sec-isnotearconfiguration

module.exports = function IsNoTearConfiguration(type, order) {
	if (IsUnclampedIntegerElementType(type)) {
		return true;
	}
	if (IsBigIntElementType(type) && order !== 'Init' && order !== 'Unordered') {
		return true;
	}
	return false;
};
