/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class DirectoryExistsPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync(
				"DirectoryExistsPlugin",
				(request, resolveContext, callback) => {
					const fs = resolver.fileSystem;
					const directory = request.path;
					if (!directory) return callback();
					fs.stat(directory, (err, stat) => {
						if (err || !stat) {
							if (resolveContext.missingDependencies) {
								resolveContext.missingDependencies.add(directory);
							}
							if (resolveContext.log) {
								resolveContext.log(`${directory} doesn't exist`);
							}
							return callback();
						}
						if (!stat.isDirectory()) {
							if (resolveContext.missingDependencies) {
								resolveContext.missingDependencies.add(directory);
							}
							if (resolveContext.log) {
								resolveContext.log(`${directory} is not a directory`);
							}
							return callback();
						}
						if (resolveContext.fileDependencies) {
							resolveContext.fileDependencies.add(directory);
						}
						resolver.doResolve(
							target,
							request,
							`existing directory ${directory}`,
							resolveContext,
							callback,
						);
					});
				},
			);
	}
};
