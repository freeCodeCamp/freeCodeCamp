'use strict';
const path = require('path');
const pathExists = require('path-exists');
const pLocate = require('p-locate');

module.exports = (iterable, options) => {
	options = Object.assign({
		cwd: process.cwd()
	}, options);

	return pLocate(iterable, el => pathExists(path.resolve(options.cwd, el)), options);
};

module.exports.sync = (iterable, options) => {
	options = Object.assign({
		cwd: process.cwd()
	}, options);

	for (const el of iterable) {
		if (pathExists.sync(path.resolve(options.cwd, el))) {
			return el;
		}
	}
};
