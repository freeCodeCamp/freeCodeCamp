/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleNotFoundError = require("../ModuleNotFoundError");
const LazySet = require("../util/LazySet");

/** @typedef {import("enhanced-resolve").ResolveContext} ResolveContext */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compilation").FileSystemDependencies} FileSystemDependencies */
/** @typedef {import("../ResolverFactory").ResolveOptionsWithDependencyType} ResolveOptionsWithDependencyType */

/**
 * Defines the matched configs item type used by this module.
 * @template T
 * @typedef {Map<string, T>} MatchedConfigsItem
 */

/**
 * Defines the matched configs type used by this module.
 * @template T
 * @typedef {object} MatchedConfigs
 * @property {MatchedConfigsItem<T>} resolved
 * @property {MatchedConfigsItem<T>} unresolved
 * @property {MatchedConfigsItem<T>} prefixed
 */

/** @type {ResolveOptionsWithDependencyType} */
const RESOLVE_OPTIONS = { dependencyType: "esm" };

/**
 * Returns resolved matchers.
 * @template T
 * @param {Compilation} compilation the compilation
 * @param {[string, T][]} configs to be processed configs
 * @returns {Promise<MatchedConfigs<T>>} resolved matchers
 */
module.exports.resolveMatchedConfigs = (compilation, configs) => {
	/** @type {MatchedConfigsItem<T>} */
	const resolved = new Map();
	/** @type {MatchedConfigsItem<T>} */
	const unresolved = new Map();
	/** @type {MatchedConfigsItem<T>} */
	const prefixed = new Map();
	/** @type {ResolveContext} */
	const resolveContext = {
		fileDependencies: new LazySet(),
		contextDependencies: new LazySet(),
		missingDependencies: new LazySet()
	};
	const resolver = compilation.resolverFactory.get("normal", RESOLVE_OPTIONS);
	const context = compilation.compiler.context;

	return Promise.all(
		// eslint-disable-next-line array-callback-return
		configs.map(([request, config]) => {
			if (/^\.\.?(?:\/|$)/.test(request)) {
				// relative request
				return new Promise((resolve) => {
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
			} else if (/^(?:\/|[a-z]:\\|\\\\)/i.test(request)) {
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
		compilation.contextDependencies.addAll(
			/** @type {FileSystemDependencies} */
			(resolveContext.contextDependencies)
		);
		compilation.fileDependencies.addAll(
			/** @type {FileSystemDependencies} */
			(resolveContext.fileDependencies)
		);
		compilation.missingDependencies.addAll(
			/** @type {FileSystemDependencies} */
			(resolveContext.missingDependencies)
		);
		return { resolved, unresolved, prefixed };
	});
};
