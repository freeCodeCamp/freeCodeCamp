/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const fs = require("fs");

const readFile = fs.readFile.bind(fs);

const loadLoader = require("./loadLoader");

function utf8BufferToString(buf) {
	const str = buf.toString("utf8");
	if (str.charCodeAt(0) === 0xfeff) {
		return str.slice(1);
	}
	return str;
}

const PATH_QUERY_FRAGMENT_REGEXP =
	/^((?:\0.|[^?#\0])*)(\?(?:\0.|[^#\0])*)?(#.*)?$/;
const ZERO_ESCAPE_REGEXP = /\0(.)/g;

/**
 * @param {string} identifier identifier
 * @returns {[string, string, string]} parsed identifier
 */
function parseIdentifier(identifier) {
	// Fast path for inputs that don't use \0 escaping.
	const firstEscape = identifier.indexOf("\0");

	if (firstEscape < 0) {
		const queryStart = identifier.indexOf("?");
		const fragmentStart = identifier.indexOf("#");

		if (fragmentStart < 0) {
			if (queryStart < 0) {
				// No fragment, no query
				return [identifier, "", ""];
			}

			// Query, no fragment
			return [
				identifier.slice(0, queryStart),
				identifier.slice(queryStart),
				"",
			];
		}

		if (queryStart < 0 || fragmentStart < queryStart) {
			// Fragment, no query
			return [
				identifier.slice(0, fragmentStart),
				"",
				identifier.slice(fragmentStart),
			];
		}

		// Query and fragment
		return [
			identifier.slice(0, queryStart),
			identifier.slice(queryStart, fragmentStart),
			identifier.slice(fragmentStart),
		];
	}

	const match = PATH_QUERY_FRAGMENT_REGEXP.exec(identifier);

	return [
		match[1].replace(ZERO_ESCAPE_REGEXP, "$1"),
		match[2] ? match[2].replace(ZERO_ESCAPE_REGEXP, "$1") : "",
		match[3] || "",
	];
}

function dirname(path) {
	if (path === "/") return "/";
	const i = path.lastIndexOf("/");
	const j = path.lastIndexOf("\\");
	const i2 = path.indexOf("/");
	const j2 = path.indexOf("\\");
	const idx = i > j ? i : j;
	const idx2 = i > j ? i2 : j2;
	if (idx < 0) return path;
	if (idx === idx2) return path.slice(0, idx + 1);
	return path.slice(0, idx);
}

function createLoaderObject(loader) {
	const obj = {
		path: null,
		query: null,
		fragment: null,
		options: null,
		ident: null,
		normal: null,
		pitch: null,
		raw: null,
		data: null,
		pitchExecuted: false,
		normalExecuted: false,
	};
	Object.defineProperty(obj, "request", {
		enumerable: true,
		get() {
			return (
				obj.path.replace(/#/g, "\0#") +
				obj.query.replace(/#/g, "\0#") +
				obj.fragment
			);
		},
		set(value) {
			if (typeof value === "string") {
				const [path, query, fragment] = parseIdentifier(value);
				obj.path = path;
				obj.query = query;
				obj.fragment = fragment;
				obj.options = undefined;
				obj.ident = undefined;
			} else {
				if (!value.loader) {
					throw new Error(
						`request should be a string or object with loader and options (${JSON.stringify(
							value
						)})`
					);
				}
				obj.path = value.loader;
				obj.fragment = value.fragment || "";
				obj.type = value.type;
				obj.options = value.options;
				obj.ident = value.ident;
				if (obj.options === null) {
					obj.query = "";
				} else if (obj.options === undefined) {
					obj.query = "";
				} else if (typeof obj.options === "string") {
					obj.query = `?${obj.options}`;
				} else if (obj.ident) {
					obj.query = `??${obj.ident}`;
				} else if (typeof obj.options === "object" && obj.options.ident) {
					obj.query = `??${obj.options.ident}`;
				} else {
					obj.query = `?${JSON.stringify(obj.options)}`;
				}
			}
		},
	});
	obj.request = loader;
	if (Object.preventExtensions) {
		Object.preventExtensions(obj);
	}
	return obj;
}

function runSyncOrAsync(fn, context, args, callback) {
	let isSync = true;
	let isDone = false;
	let isError = false; // internal error
	let reportedError = false;

	// eslint-disable-next-line func-name-matching
	const innerCallback = (context.callback = function innerCallback() {
		if (isDone) {
			if (reportedError) return; // ignore
			throw new Error("callback(): The callback was already called.");
		}

		isDone = true;
		isSync = false;

		try {
			callback.apply(null, arguments);
		} catch (err) {
			isError = true;
			throw err;
		}
	});

	context.async = function async() {
		if (isDone) {
			if (reportedError) return; // ignore
			throw new Error("async(): The callback was already called.");
		}

		isSync = false;

		return innerCallback;
	};

	try {
		const result = (function LOADER_EXECUTION() {
			return fn.apply(context, args);
		})();
		if (isSync) {
			isDone = true;
			if (result === undefined) return callback();
			if (
				result &&
				typeof result === "object" &&
				typeof result.then === "function"
			) {
				return result.then((r) => {
					callback(null, r);
				}, callback);
			}
			return callback(null, result);
		}
	} catch (err) {
		if (isError) throw err;
		if (isDone) {
			// loader is already "done", so we cannot use the callback function
			// for better debugging we print the error on the console
			if (typeof err === "object" && err.stack) {
				// eslint-disable-next-line no-console
				console.error(err.stack);
			} else {
				// eslint-disable-next-line no-console
				console.error(err);
			}
			return;
		}
		isDone = true;
		reportedError = true;
		callback(err);
	}
}

function convertArgs(args, raw) {
	if (!raw && Buffer.isBuffer(args[0])) {
		args[0] = utf8BufferToString(args[0]);
	} else if (raw && typeof args[0] === "string") {
		args[0] = Buffer.from(args[0], "utf8");
	}
}

function iterateNormalLoaders(options, loaderContext, args, callback) {
	if (loaderContext.loaderIndex < 0) return callback(null, args);

	const currentLoaderObject = loaderContext.loaders[loaderContext.loaderIndex];

	// iterate
	if (currentLoaderObject.normalExecuted) {
		loaderContext.loaderIndex--;
		return iterateNormalLoaders(options, loaderContext, args, callback);
	}

	const fn = currentLoaderObject.normal;
	currentLoaderObject.normalExecuted = true;
	if (!fn) {
		return iterateNormalLoaders(options, loaderContext, args, callback);
	}

	convertArgs(args, currentLoaderObject.raw);

	runSyncOrAsync(fn, loaderContext, args, function runSyncOrAsyncCallback(err) {
		if (err) return callback(err);

		const args = Array.prototype.slice.call(arguments, 1);
		iterateNormalLoaders(options, loaderContext, args, callback);
	});
}

function processResource(options, loaderContext, callback) {
	// set loader index to last loader
	loaderContext.loaderIndex = loaderContext.loaders.length - 1;

	const { resourcePath } = loaderContext;

	if (resourcePath) {
		options.processResource(
			loaderContext,
			resourcePath,
			function processResourceCallback(err) {
				if (err) return callback(err);
				const args = Array.prototype.slice.call(arguments, 1);

				[options.resourceBuffer] = args;

				iterateNormalLoaders(options, loaderContext, args, callback);
			}
		);
	} else {
		iterateNormalLoaders(options, loaderContext, [null], callback);
	}
}

function iteratePitchingLoaders(options, loaderContext, callback) {
	// abort after last loader
	if (loaderContext.loaderIndex >= loaderContext.loaders.length) {
		return processResource(options, loaderContext, callback);
	}

	const currentLoaderObject = loaderContext.loaders[loaderContext.loaderIndex];

	// iterate
	if (currentLoaderObject.pitchExecuted) {
		loaderContext.loaderIndex++;
		return iteratePitchingLoaders(options, loaderContext, callback);
	}

	// load loader module
	loadLoader(currentLoaderObject, (err) => {
		if (err) {
			loaderContext.cacheable(false);
			return callback(err);
		}
		const fn = currentLoaderObject.pitch;
		currentLoaderObject.pitchExecuted = true;
		if (!fn) return iteratePitchingLoaders(options, loaderContext, callback);

		runSyncOrAsync(
			fn,
			loaderContext,
			[
				loaderContext.remainingRequest,
				loaderContext.previousRequest,
				(currentLoaderObject.data = {}),
			],
			function runSyncOrAsyncCallback(err) {
				if (err) return callback(err);
				const args = Array.prototype.slice.call(arguments, 1);
				// Determine whether to continue the pitching process based on
				// argument values (as opposed to argument presence) in order
				// to support synchronous and asynchronous usages.
				const hasArg = args.some((value) => value !== undefined);
				if (hasArg) {
					loaderContext.loaderIndex--;
					iterateNormalLoaders(options, loaderContext, args, callback);
				} else {
					iteratePitchingLoaders(options, loaderContext, callback);
				}
			}
		);
	});
}

module.exports.getContext = function getContext(resource) {
	const [path] = parseIdentifier(resource);
	return dirname(path);
};

module.exports.runLoaders = function runLoaders(options, callback) {
	// read options
	const resource = options.resource || "";
	let loaders = options.loaders || [];
	const loaderContext = options.context || {};
	const processResource =
		options.processResource ||
		((readResource, context, resource, callback) => {
			context.addDependency(resource);
			readResource(resource, callback);
		}).bind(null, options.readResource || readFile);

	const splittedResource = resource && parseIdentifier(resource);
	const resourcePath = splittedResource ? splittedResource[0] : "";
	const resourceQuery = splittedResource ? splittedResource[1] : "";
	const resourceFragment = splittedResource ? splittedResource[2] : "";
	const contextDirectory = resourcePath ? dirname(resourcePath) : null;

	// execution state
	let requestCacheable = true;
	const fileDependencies = [];
	const contextDependencies = [];
	const missingDependencies = [];

	// prepare loader objects
	loaders = loaders.map(createLoaderObject);

	loaderContext.context = contextDirectory;
	loaderContext.loaderIndex = 0;
	loaderContext.loaders = loaders;
	loaderContext.resourcePath = resourcePath;
	loaderContext.resourceQuery = resourceQuery;
	loaderContext.resourceFragment = resourceFragment;
	loaderContext.async = null;
	loaderContext.callback = null;
	loaderContext.cacheable = function cacheable(flag) {
		if (flag === false) {
			requestCacheable = false;
		}
	};
	loaderContext.dependency = loaderContext.addDependency =
		function addDependency(file) {
			fileDependencies.push(file);
		};
	loaderContext.addContextDependency = function addContextDependency(context) {
		contextDependencies.push(context);
	};
	loaderContext.addMissingDependency = function addMissingDependency(context) {
		missingDependencies.push(context);
	};
	loaderContext.getDependencies = function getDependencies() {
		return [...fileDependencies];
	};
	loaderContext.getContextDependencies = function getContextDependencies() {
		return [...contextDependencies];
	};
	loaderContext.getMissingDependencies = function getMissingDependencies() {
		return [...missingDependencies];
	};
	loaderContext.clearDependencies = function clearDependencies() {
		fileDependencies.length = 0;
		contextDependencies.length = 0;
		missingDependencies.length = 0;
		requestCacheable = true;
	};
	Object.defineProperty(loaderContext, "resource", {
		enumerable: true,
		get() {
			return (
				loaderContext.resourcePath.replace(/#/g, "\0#") +
				loaderContext.resourceQuery.replace(/#/g, "\0#") +
				loaderContext.resourceFragment
			);
		},
		set(value) {
			const splittedResource = value && parseIdentifier(value);
			loaderContext.resourcePath = splittedResource ? splittedResource[0] : "";
			loaderContext.resourceQuery = splittedResource ? splittedResource[1] : "";
			loaderContext.resourceFragment = splittedResource
				? splittedResource[2]
				: "";
		},
	});
	Object.defineProperty(loaderContext, "request", {
		enumerable: true,
		get() {
			return loaderContext.loaders
				.map((loader) => loader.request)
				.concat(loaderContext.resource || "")
				.join("!");
		},
	});
	Object.defineProperty(loaderContext, "remainingRequest", {
		enumerable: true,
		get() {
			if (
				loaderContext.loaderIndex >= loaderContext.loaders.length - 1 &&
				!loaderContext.resource
			) {
				return "";
			}
			return loaderContext.loaders
				.slice(loaderContext.loaderIndex + 1)
				.map((loader) => loader.request)
				.concat(loaderContext.resource || "")
				.join("!");
		},
	});
	Object.defineProperty(loaderContext, "currentRequest", {
		enumerable: true,
		get() {
			return loaderContext.loaders
				.slice(loaderContext.loaderIndex)
				.map((loader) => loader.request)
				.concat(loaderContext.resource || "")
				.join("!");
		},
	});
	Object.defineProperty(loaderContext, "previousRequest", {
		enumerable: true,
		get() {
			return loaderContext.loaders
				.slice(0, loaderContext.loaderIndex)
				.map((loader) => loader.request)
				.join("!");
		},
	});
	Object.defineProperty(loaderContext, "query", {
		enumerable: true,
		get() {
			const entry = loaderContext.loaders[loaderContext.loaderIndex];
			return entry.options && typeof entry.options === "object"
				? entry.options
				: entry.query;
		},
	});
	Object.defineProperty(loaderContext, "data", {
		enumerable: true,
		get() {
			return loaderContext.loaders[loaderContext.loaderIndex].data;
		},
	});

	// finish loader context
	if (Object.preventExtensions) {
		Object.preventExtensions(loaderContext);
	}

	const processOptions = {
		resourceBuffer: null,
		processResource,
	};
	iteratePitchingLoaders(processOptions, loaderContext, (err, result) => {
		if (err) {
			return callback(err, {
				cacheable: requestCacheable,
				fileDependencies,
				contextDependencies,
				missingDependencies,
			});
		}
		callback(null, {
			result,
			resourceBuffer: processOptions.resourceBuffer,
			cacheable: requestCacheable,
			fileDependencies,
			contextDependencies,
			missingDependencies,
		});
	});
};
