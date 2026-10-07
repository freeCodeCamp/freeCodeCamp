/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { basename } = require("./getPaths");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class CloneBasenamePlugin {
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
			.tapAsync("CloneBasenamePlugin", (request, resolveContext, callback) => {
				const requestPath = /** @type {string} */ (request.path);
				const filename = /** @type {string} */ (basename(requestPath));
				const filePath = resolver.join(requestPath, filename);
				/** @type {ResolveRequest} */
				const obj = {
					...request,
					path: filePath,
					relativePath:
						request.relativePath &&
						resolver.join(request.relativePath, filename),
				};
				resolver.doResolve(
					target,
					obj,
					`using path: ${filePath}`,
					resolveContext,
					callback,
				);
			});
	}
};
