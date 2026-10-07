'use strict';
const path = require('path');
const fs = require('fs');
const commonDir = require('commondir');
const pkgDir = require('pkg-dir');
const makeDir = require('make-dir');

const {env, cwd} = process;

const isWritable = path => {
	try {
		fs.accessSync(path, fs.constants.W_OK);
		return true;
	} catch (_) {
		return false;
	}
};

function useDirectory(directory, options) {
	if (options.create) {
		makeDir.sync(directory);
	}

	if (options.thunk) {
		return (...arguments_) => path.join(directory, ...arguments_);
	}

	return directory;
}

function getNodeModuleDirectory(directory) {
	const nodeModules = path.join(directory, 'node_modules');

	if (
		!isWritable(nodeModules) &&
		(fs.existsSync(nodeModules) || !isWritable(path.join(directory)))
	) {
		return;
	}

	return nodeModules;
}

module.exports = (options = {}) => {
	if (env.CACHE_DIR && !['true', 'false', '1', '0'].includes(env.CACHE_DIR)) {
		return useDirectory(path.join(env.CACHE_DIR, options.name), options);
	}

	let {cwd: directory = cwd()} = options;

	if (options.files) {
		directory = commonDir(directory, options.files);
	}

	directory = pkgDir.sync(directory);

	if (!directory) {
		return;
	}

	const nodeModules = getNodeModuleDirectory(directory);
	if (!nodeModules) {
		return undefined;
	}

	return useDirectory(path.join(directory, 'node_modules', '.cache', options.name), options);
};
