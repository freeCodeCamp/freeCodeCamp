'use strict';
const fs = require('fs');
const path = require('path');
const pify = require('pify');
const semver = require('semver');

const defaults = {
	mode: 0o777 & (~process.umask()),
	fs
};

const useNativeRecursiveOption = semver.satisfies(process.version, '>=10.12.0');

// https://github.com/nodejs/node/issues/8987
// https://github.com/libuv/libuv/pull/1088
const checkPath = pth => {
	if (process.platform === 'win32') {
		const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ''));

		if (pathHasInvalidWinCharacters) {
			const error = new Error(`Path contains invalid characters: ${pth}`);
			error.code = 'EINVAL';
			throw error;
		}
	}
};

const permissionError = pth => {
	// This replicates the exception of `fs.mkdir` with native the
	// `recusive` option when run on an invalid drive under Windows.
	const error = new Error(`operation not permitted, mkdir '${pth}'`);
	error.code = 'EPERM';
	error.errno = -4048;
	error.path = pth;
	error.syscall = 'mkdir';
	return error;
};

const makeDir = (input, options) => Promise.resolve().then(() => {
	checkPath(input);
	options = Object.assign({}, defaults, options);

	// TODO: Use util.promisify when targeting Node.js 8
	const mkdir = pify(options.fs.mkdir);
	const stat = pify(options.fs.stat);

	if (useNativeRecursiveOption && options.fs.mkdir === fs.mkdir) {
		const pth = path.resolve(input);

		return mkdir(pth, {
			mode: options.mode,
			recursive: true
		}).then(() => pth);
	}

	const make = pth => {
		return mkdir(pth, options.mode)
			.then(() => pth)
			.catch(error => {
				if (error.code === 'EPERM') {
					throw error;
				}

				if (error.code === 'ENOENT') {
					if (path.dirname(pth) === pth) {
						throw permissionError(pth);
					}

					if (error.message.includes('null bytes')) {
						throw error;
					}

					return make(path.dirname(pth)).then(() => make(pth));
				}

				return stat(pth)
					.then(stats => stats.isDirectory() ? pth : Promise.reject())
					.catch(() => {
						throw error;
					});
			});
	};

	return make(path.resolve(input));
});

module.exports = makeDir;
module.exports.default = makeDir;

module.exports.sync = (input, options) => {
	checkPath(input);
	options = Object.assign({}, defaults, options);

	if (useNativeRecursiveOption && options.fs.mkdirSync === fs.mkdirSync) {
		const pth = path.resolve(input);

		fs.mkdirSync(pth, {
			mode: options.mode,
			recursive: true
		});

		return pth;
	}

	const make = pth => {
		try {
			options.fs.mkdirSync(pth, options.mode);
		} catch (error) {
			if (error.code === 'EPERM') {
				throw error;
			}

			if (error.code === 'ENOENT') {
				if (path.dirname(pth) === pth) {
					throw permissionError(pth);
				}

				if (error.message.includes('null bytes')) {
					throw error;
				}

				make(path.dirname(pth));
				return make(pth);
			}

			try {
				if (!options.fs.statSync(pth).isDirectory()) {
					throw new Error('The path is not a directory');
				}
			} catch (_) {
				throw error;
			}
		}

		return pth;
	};

	return make(path.resolve(input));
};
