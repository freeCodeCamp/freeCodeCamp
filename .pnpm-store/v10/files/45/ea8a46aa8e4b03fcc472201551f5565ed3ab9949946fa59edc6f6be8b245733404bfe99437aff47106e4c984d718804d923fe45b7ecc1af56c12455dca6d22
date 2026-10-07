'use strict';
const fs = require('fs');
const path = require('path');
const { envReplace } = require('@pnpm/config.env-replace');

const parseKey = (key) => {
	if (typeof key !== 'string') {
		return key;
	}

	return envReplace(key, process.env);
}

// https://github.com/npm/cli/blob/latest/lib/config/core.js#L359-L404
const parseField = (types, field, key) => {
	if (typeof field !== 'string') {
		return field;
	}

	const typeList = [].concat(types[key]);
	const isPath = typeList.indexOf(path) !== -1;
	const isBool = typeList.indexOf(Boolean) !== -1;
	const isString = typeList.indexOf(String) !== -1;
	const isNumber = typeList.indexOf(Number) !== -1;

	field = `${field}`.trim();

	if (/^".*"$/.test(field)) {
		try {
			field = JSON.parse(field);
		} catch (error) {
			throw new Error(`Failed parsing JSON config key ${key}: ${field}`);
		}
	}

	if (isBool && !isString && field === '') {
		return true;
	}

	switch (field) { // eslint-disable-line default-case
		case 'true': {
			return true;
		}

		case 'false': {
			return false;
		}

		case 'null': {
			return null;
		}

		case 'undefined': {
			return undefined;
		}
	}

	const processedField = envReplace(field, process.env);
	// Skip environment variable substitution for tokenHelper to prevent command injection
	// via attacker-controlled environment variables
	if ((key.endsWith(':tokenHelper') || key === 'tokenHelper') && processedField !== field) {
		throw new Error(`It is not allowed to use environment variables in the value of the ${key} setting.`);
	} else {
		field = processedField;
	}

	if (isPath) {
		const regex = process.platform === 'win32' ? /^~(\/|\\)/ : /^~\//;

		if (regex.test(field) && process.env.HOME) {
			field = path.resolve(process.env.HOME, field.substr(2));
		}

		field = path.resolve(field);
	}

	if (isNumber && !isNaN(field)) {
		field = Number(field);
	}

	return field;
};

// https://github.com/npm/cli/blob/latest/lib/config/find-prefix.js
const findPrefix = name => {
	name = path.resolve(name);

	let walkedUp = false;

	while (path.basename(name) === 'node_modules') {
		name = path.dirname(name);
		walkedUp = true;
	}

	if (walkedUp) {
		return name;
	}

	const find = (name, original) => {
		const regex = /^[a-zA-Z]:(\\|\/)?$/;

		if (name === '/' || (process.platform === 'win32' && regex.test(name))) {
			return original;
		}

		try {
			const files = fs.readdirSync(name);

			if (
				files.includes('node_modules') ||
				files.includes('package.json') ||
				files.includes('package.json5') ||
				files.includes('package.yaml') ||
				files.includes('pnpm-workspace.yaml')
			) {
				return name;
			}

			const dirname = path.dirname(name);

			if (dirname === name) {
				return original;
			}

			return find(dirname, original);
		} catch (error) {
			if (name === original) {
				if (error.code === 'ENOENT') {
					return original;
				}

				throw error;
			}

			return original;
		}
	};

	return find(name, name);
};

exports.envReplace = envReplace;
exports.findPrefix = findPrefix;
exports.parseField = parseField;
exports.parseKey = parseKey;
