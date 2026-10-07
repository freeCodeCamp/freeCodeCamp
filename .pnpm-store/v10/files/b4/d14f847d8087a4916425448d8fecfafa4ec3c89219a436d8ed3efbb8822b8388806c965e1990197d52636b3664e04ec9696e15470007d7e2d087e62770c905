'use strict';
const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const parseJson = require('parse-json');

const readFileAsync = promisify(fs.readFile);

module.exports = async options => {
	options = {
		cwd: process.cwd(),
		normalize: true,
		...options
	};

	const filePath = path.resolve(options.cwd, 'package.json');
	const json = parseJson(await readFileAsync(filePath, 'utf8'));

	if (options.normalize) {
		require('normalize-package-data')(json);
	}

	return json;
};

module.exports.sync = options => {
	options = {
		cwd: process.cwd(),
		normalize: true,
		...options
	};

	const filePath = path.resolve(options.cwd, 'package.json');
	const json = parseJson(fs.readFileSync(filePath, 'utf8'));

	if (options.normalize) {
		require('normalize-package-data')(json);
	}

	return json;
};
