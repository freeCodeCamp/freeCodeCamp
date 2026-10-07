/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ContextElementDependency = require("./dependencies/ContextElementDependency");
const { join } = require("./util/fs");

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

class ContextReplacementPlugin {
	/**
	 * @param {RegExp} resourceRegExp A regular expression that determines which files will be selected
	 * @param {TODO=} newContentResource A new resource to replace the match
	 * @param {TODO=} newContentRecursive If true, all subdirectories are searched for matches
	 * @param {RegExp=} newContentRegExp A regular expression that determines which files will be selected
	 */
	constructor(
		resourceRegExp,
		newContentResource,
		newContentRecursive,
		newContentRegExp
	) {
		this.resourceRegExp = resourceRegExp;

		if (typeof newContentResource === "function") {
			this.newContentCallback = newContentResource;
		} else if (
			typeof newContentResource === "string" &&
			typeof newContentRecursive === "object"
		) {
			this.newContentResource = newContentResource;
			this.newContentCreateContextMap = (fs, callback) => {
				callback(null, newContentRecursive);
			};
		} else if (
			typeof newContentResource === "string" &&
			typeof newContentRecursive === "function"
		) {
			this.newContentResource = newContentResource;
			this.newContentCreateContextMap = newContentRecursive;
		} else {
			if (typeof newContentResource !== "string") {
				newContentRegExp = newContentRecursive;
				newContentRecursive = newContentResource;
				newContentResource = undefined;
			}
			if (typeof newContentRecursive !== "boolean") {
				newContentRegExp = newContentRecursive;
				newContentRecursive = undefined;
			}
			this.newContentResource = newContentResource;
			this.newContentRecursive = newContentRecursive;
			this.newContentRegExp = newContentRegExp;
		}
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const resourceRegExp = this.resourceRegExp;
		const newContentCallback = this.newContentCallback;
		const newContentResource = this.newContentResource;
		const newContentRecursive = this.newContentRecursive;
		const newContentRegExp = this.newContentRegExp;
		const newContentCreateContextMap = this.newContentCreateContextMap;

		compiler.hooks.contextModuleFactory.tap("ContextReplacementPlugin", cmf => {
			cmf.hooks.beforeResolve.tap("ContextReplacementPlugin", result => {
				if (!result) return;
				if (resourceRegExp.test(result.request)) {
					if (newContentResource !== undefined) {
						result.request = newContentResource;
					}
					if (newContentRecursive !== undefined) {
						result.recursive = newContentRecursive;
					}
					if (newContentRegExp !== undefined) {
						result.regExp = newContentRegExp;
					}
					if (typeof newContentCallback === "function") {
						newContentCallback(result);
					} else {
						for (const d of result.dependencies) {
							if (d.critical) d.critical = false;
						}
					}
				}
				return result;
			});
			cmf.hooks.afterResolve.tap("ContextReplacementPlugin", result => {
				if (!result) return;
				if (resourceRegExp.test(result.resource)) {
					if (newContentResource !== undefined) {
						if (
							newContentResource.startsWith("/") ||
							(newContentResource.length > 1 && newContentResource[1] === ":")
						) {
							result.resource = newContentResource;
						} else {
							result.resource = join(
								/** @type {InputFileSystem} */ (compiler.inputFileSystem),
								result.resource,
								newContentResource
							);
						}
					}
					if (newContentRecursive !== undefined) {
						result.recursive = newContentRecursive;
					}
					if (newContentRegExp !== undefined) {
						result.regExp = newContentRegExp;
					}
					if (typeof newContentCreateContextMap === "function") {
						result.resolveDependencies =
							createResolveDependenciesFromContextMap(
								newContentCreateContextMap
							);
					}
					if (typeof newContentCallback === "function") {
						const origResource = result.resource;
						newContentCallback(result);
						if (
							result.resource !== origResource &&
							!result.resource.startsWith("/") &&
							(result.resource.length <= 1 || result.resource[1] !== ":")
						) {
							// When the function changed it to an relative path
							result.resource = join(
								/** @type {InputFileSystem} */ (compiler.inputFileSystem),
								origResource,
								result.resource
							);
						}
					} else {
						for (const d of result.dependencies) {
							if (d.critical) d.critical = false;
						}
					}
				}
				return result;
			});
		});
	}
}

const createResolveDependenciesFromContextMap = createContextMap => {
	const resolveDependenciesFromContextMap = (fs, options, callback) => {
		createContextMap(fs, (err, map) => {
			if (err) return callback(err);
			const dependencies = Object.keys(map).map(
				key =>
					new ContextElementDependency(
						map[key] + options.resourceQuery + options.resourceFragment,
						key,
						options.category,
						options.referencedExports
					)
			);
			callback(null, dependencies);
		});
	};
	return resolveDependenciesFromContextMap;
};

module.exports = ContextReplacementPlugin;
