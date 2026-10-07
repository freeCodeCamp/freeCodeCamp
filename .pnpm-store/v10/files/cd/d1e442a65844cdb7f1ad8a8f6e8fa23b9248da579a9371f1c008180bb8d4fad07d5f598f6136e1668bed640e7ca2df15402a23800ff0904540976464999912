'use strict';

const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;

module.exports = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return string.replace(matchOperatorsRegex, '\\$&');
};
