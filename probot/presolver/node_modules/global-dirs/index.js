'use strict';
const path = require('path');
const os = require('os');
const fs = require('fs');
const ini = require('ini');

const readRc = fp => {
	try {
		return ini.parse(fs.readFileSync(fp, 'utf8')).prefix;
	} catch (err) {}
};

const defaultNpmPrefix = (() => {
	if (process.env.PREFIX) {
		return process.env.PREFIX;
	}

	if (process.platform === 'win32') {
		// `c:\node\node.exe` → `prefix=c:\node\`
		return path.dirname(process.execPath);
	}

	// `/usr/local/bin/node` → `prefix=/usr/local`
	return path.dirname(path.dirname(process.execPath));
})();

const getNpmPrefix = () => {
	if (process.env.PREFIX) {
		return process.env.PREFIX;
	}

	const homePrefix = readRc(path.join(os.homedir(), '.npmrc'));
	if (homePrefix) {
		return homePrefix;
	}

	const globalConfigPrefix = readRc(path.resolve(defaultNpmPrefix, 'etc', 'npmrc'));
	if (globalConfigPrefix) {
		return globalConfigPrefix;
	}

	if (process.platform === 'win32' && process.env.APPDATA) {
		// Hardcoded contents of `c:\Program Files\nodejs\node_modules\npm\.npmrc`
		const prefix = path.join(process.env.APPDATA, 'npm');
		if (fs.existsSync(prefix)) {
			return prefix;
		}
	}

	return defaultNpmPrefix;
};

const npmPrefix = path.resolve(getNpmPrefix());

const getYarnPrefix = () => {
	if (process.env.PREFIX) {
		return process.env.PREFIX;
	}

	if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
		const prefix = path.join(process.env.LOCALAPPDATA, 'Yarn');
		if (fs.existsSync(prefix)) {
			return prefix;
		}
	}

	const configPrefix = path.join(os.homedir(), '.config/yarn');
	if (fs.existsSync(configPrefix)) {
		return configPrefix;
	}

	const homePrefix = path.join(os.homedir(), '.yarn-config');
	if (fs.existsSync(homePrefix)) {
		return homePrefix;
	}

	// Yarn supports the npm conventions but the inverse is not true
	return npmPrefix;
};

exports.npm = {};
exports.npm.prefix = npmPrefix;
exports.npm.packages = path.join(npmPrefix, process.platform === 'win32' ? 'node_modules' : 'lib/node_modules');
exports.npm.binaries = process.platform === 'win32' ? npmPrefix : path.join(npmPrefix, 'bin');

const yarnPrefix = path.resolve(getYarnPrefix());
exports.yarn = {};
exports.yarn.prefix = yarnPrefix;
exports.yarn.packages = path.join(yarnPrefix, process.platform === 'win32' ? 'config/global/node_modules' : 'global/node_modules');
exports.yarn.binaries = path.join(exports.yarn.packages, '.bin');
