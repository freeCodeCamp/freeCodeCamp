import process from 'node:process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import pathKey from 'path-key';

export const npmRunPath = ({
	cwd = process.cwd(),
	path: pathOption = process.env[pathKey()],
	preferLocal = true,
	execPath = process.execPath,
	addExecPath = true,
} = {}) => {
	const cwdString = cwd instanceof URL ? fileURLToPath(cwd) : cwd;
	const cwdPath = path.resolve(cwdString);
	const result = [];

	if (preferLocal) {
		applyPreferLocal(result, cwdPath);
	}

	if (addExecPath) {
		applyExecPath(result, execPath, cwdPath);
	}

	return [...result, pathOption].join(path.delimiter);
};

const applyPreferLocal = (result, cwdPath) => {
	let previous;

	while (previous !== cwdPath) {
		result.push(path.join(cwdPath, 'node_modules/.bin'));
		previous = cwdPath;
		cwdPath = path.resolve(cwdPath, '..');
	}
};

// Ensure the running `node` binary is used
const applyExecPath = (result, execPath, cwdPath) => {
	const execPathString = execPath instanceof URL ? fileURLToPath(execPath) : execPath;
	result.push(path.resolve(cwdPath, execPathString, '..'));
};

export const npmRunPathEnv = ({env = process.env, ...options} = {}) => {
	env = {...env};

	const pathName = pathKey({env});
	options.path = env[pathName];
	env[pathName] = npmRunPath(options);

	return env;
};
