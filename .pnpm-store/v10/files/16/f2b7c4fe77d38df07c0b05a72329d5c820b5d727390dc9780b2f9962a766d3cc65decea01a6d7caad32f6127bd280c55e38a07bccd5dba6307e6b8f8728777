'use strict';
const path = require('path');
const execa = require('execa');

const xsel = 'xsel';
const xselFallback = path.join(__dirname, '../fallbacks/linux/xsel');

const copyArguments = ['--clipboard', '--input'];
const pasteArguments = ['--clipboard', '--output'];

const makeError = (xselError, fallbackError) => {
	let error;
	if (xselError.code === 'ENOENT') {
		error = new Error('Couldn\'t find the `xsel` binary and fallback didn\'t work. On Debian/Ubuntu you can install xsel with: sudo apt install xsel');
	} else {
		error = new Error('Both xsel and fallback failed');
		error.xselError = xselError;
	}

	error.fallbackError = fallbackError;
	return error;
};

const xselWithFallback = async (argumentList, options) => {
	try {
		return await execa.stdout(xsel, argumentList, options);
	} catch (xselError) {
		try {
			return await execa.stdout(xselFallback, argumentList, options);
		} catch (fallbackError) {
			throw makeError(xselError, fallbackError);
		}
	}
};

const xselWithFallbackSync = (argumentList, options) => {
	try {
		return execa.sync(xsel, argumentList, options);
	} catch (xselError) {
		try {
			return execa.sync(xselFallback, argumentList, options);
		} catch (fallbackError) {
			throw makeError(xselError, fallbackError);
		}
	}
};

module.exports = {
	copy: async options => {
		await xselWithFallback(copyArguments, options);
	},
	copySync: options => {
		xselWithFallbackSync(copyArguments, options);
	},
	paste: options => xselWithFallback(pasteArguments, options),
	pasteSync: options => xselWithFallbackSync(pasteArguments, options)
};
