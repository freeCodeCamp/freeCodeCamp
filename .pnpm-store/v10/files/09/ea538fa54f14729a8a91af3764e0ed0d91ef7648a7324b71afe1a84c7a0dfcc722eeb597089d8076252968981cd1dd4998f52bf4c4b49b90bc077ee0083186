"use strict";

const LoaderLoadingError = require("./LoaderLoadingError");

let url;

function handleResult(loader, module, callback) {
	if (typeof module !== "function" && typeof module !== "object") {
		return callback(
			new LoaderLoadingError(
				`Module '${
					loader.path
				}' is not a loader (export function or es6 module)`
			)
		);
	}

	loader.normal = typeof module === "function" ? module : module.default;
	loader.pitch = module.pitch;
	loader.raw = module.raw;

	if (
		typeof loader.normal !== "function" &&
		typeof loader.pitch !== "function"
	) {
		return callback(
			new LoaderLoadingError(
				`Module '${
					loader.path
				}' is not a loader (must have normal or pitch function)`
			)
		);
	}
	callback();
}

module.exports = function loadLoader(loader, callback) {
	if (loader.type === "module") {
		try {
			if (url === undefined) url = require("url");

			// eslint-disable-next-line n/no-unsupported-features/node-builtins
			const loaderUrl = url.pathToFileURL(loader.path);
			// eslint-disable-next-line no-eval
			const modulePromise = eval(
				`import(${JSON.stringify(loaderUrl.toString())})`
			);

			modulePromise.then((module) => {
				handleResult(loader, module, callback);
			}, callback);
		} catch (err) {
			callback(err);
		}
	} else {
		let loadedModule;

		try {
			loadedModule = require(loader.path);
		} catch (err) {
			// it is possible for node to choke on a require if the FD descriptor
			// limit has been reached. give it a chance to recover.
			if (err instanceof Error && err.code === "EMFILE") {
				const retry = loadLoader.bind(null, loader, callback);

				if (typeof setImmediate === "function") {
					// node >= 0.9.0
					return setImmediate(retry);
				}

				// node < 0.9.0
				return process.nextTick(retry);
			}

			return callback(err);
		}

		return handleResult(loader, loadedModule, callback);
	}
};
