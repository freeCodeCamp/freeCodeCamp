'use strict';
const stringWidth = require('string-width');

const widestLine = input => {
	let max = 0;

	for (const line of input.split('\n')) {
		max = Math.max(max, stringWidth(line));
	}

	return max;
};

module.exports = widestLine;
// TODO: remove this in the next major version
module.exports.default = widestLine;
