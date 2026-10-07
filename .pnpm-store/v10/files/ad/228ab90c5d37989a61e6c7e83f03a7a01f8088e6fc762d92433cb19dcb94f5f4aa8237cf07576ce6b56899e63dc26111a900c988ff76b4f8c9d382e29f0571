/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleNotFoundError = require("../ModuleNotFoundError");
const LazySet = require("../util/LazySet");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../ResolverFactory").ResolveOptionsWithDependencyType} ResolveOptionsWithDependencyType */

/**
 * @template T
 * @typedef {object} MatchedConfigs
 * @property {Map<string, T>} resolved
 * @property {Map<string, T>} unresolved
 * @property {Map<string, T>} prefixed
 */

/** @type {ResolveOptionsWithDependencyType} */
const RESOLVE_OPTIONS = { dependencyType: "esm" };

/**
 * @template T
 * @param {Compilation} compilation the compilation
 * @param {[string, T][]} configs to be processed configs
 * @returns {Promise<MatchedConfigs<T>>} resolved matchers
 */
module.exports.resolveMatchedConfigs = (compilation, configs) => {
	/** @type {Map<string, T>} */
	const resolved = new Map();
	/** @type {Map<string, T>} */
	const unresolved = new Map();
	/** @type {Map<string, T>} */
	const prefixed = new Map();
	const resolveContext = {
		/** @type {LazySet<string>} */
		fileDependencies: new LazySet(),
		/** @type {LazySet<string>} */
		contextDependencies: new LazySet(),
		/** @type {LazySet<string>} */
		missingDependencies: new LazySet()
	};
	const resolver = compilation.resolverFactory.get("normal", RESOLVE_OPTIONS);
	const context = compilation.compiler.context;

	return Promise.all(
		// eslint-disable-next-line array-callback-return
		configs.map(([request, config]) => {
			if (/^\.\.?(\/|$)/.test(request)) {
				// relative request
				return new Promise(resolve => {
					resolver.resolve(
						{},
						context,
						request,
						resolveContext,
						(err, result) => {
							if (err || result === false) {
								err = err || new Error(`Can't resolve ${request}`);
								compilation.errors.push(
									new ModuleNotFoundError(null, err, {
										name: `shared module ${request}`
									})
								);
								return resolve(null);
							}
							resolved.set(/** @type {string} */ (result), config);
							resolve(null);
						}
					);
				});
			} else if (/^(\/|[A-Za-z]:\\|\\\\)/.test(request)) {
				// absolute path
				resolved.set(request, config);
			} else if (request.endsWith("/")) {
				// module request prefix
				prefixed.set(request, config);
			} else {
				// module request
				unresolved.set(request, config);
			}
		})
	).then(() => {
		compilation.contextDependencies.addAll(resolveContext.contextDependencies);
		compilation.fileDependencies.addAll(resolveContext.fileDependencies);
		compilation.missingDependencies.addAll(resolveContext.missingDependencies);
		return { resolved, unresolved, prefixed };
	});
};
