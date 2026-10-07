/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class FileExistsPlugin {
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
		const fs = resolver.fileSystem;
		resolver
			.getHook(this.source)
			.tapAsync("FileExistsPlugin", (request, resolveContext, callback) => {
				const file = request.path;
				if (!file) return callback();
				fs.stat(file, (err, stat) => {
					if (err || !stat) {
						if (resolveContext.missingDependencies) {
							resolveContext.missingDependencies.add(file);
						}
						if (resolveContext.log) resolveContext.log(`${file} doesn't exist`);
						return callback();
					}
					if (!stat.isFile()) {
						if (resolveContext.missingDependencies) {
							resolveContext.missingDependencies.add(file);
						}
						if (resolveContext.log) resolveContext.log(`${file} is not a file`);
						return callback();
					}
					if (resolveContext.fileDependencies) {
						resolveContext.fileDependencies.add(file);
					}
					resolver.doResolve(
						target,
						request,
						`existing file: ${file}`,
						resolveContext,
						callback,
					);
				});
			});
	}
};
