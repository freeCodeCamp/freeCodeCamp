'use strict';
const stringWidth = require('string-width');

module.exports = input => {
	let max = 0;
	for (const s of input.split('\n')) max = Math.max(max, stringWidth(s));
	return max;
};
