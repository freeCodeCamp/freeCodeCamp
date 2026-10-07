'use strict';
const path = require('path');
const commonDir = require('commondir');
const pkgDir = require('pkg-dir');
const makeDir = require('make-dir');

module.exports = (options = {}) => {
	const {name} = options;
	let directory = options.cwd;

	if (options.files) {
		directory = commonDir(directory, options.files);
	} else {
		directory = directory || process.cwd();
	}

	directory = pkgDir.sync(directory);

	if (directory) {
		directory = path.join(directory, 'node_modules', '.cache', name);

		if (directory && options.create) {
			makeDir.sync(directory);
		}

		if (options.thunk) {
			return (...arguments_) => path.join(directory, ...arguments_);
		}
	}

	return directory;
};
