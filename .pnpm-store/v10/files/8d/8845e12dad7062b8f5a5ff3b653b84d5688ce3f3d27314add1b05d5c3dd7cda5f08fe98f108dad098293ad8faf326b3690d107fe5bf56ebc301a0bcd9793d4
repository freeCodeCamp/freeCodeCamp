'use strict';
module.exports = string => {
	const match = string.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return 0;
	}

	return match.reduce((r, a) => Math.min(r, a.length), Infinity);
};
