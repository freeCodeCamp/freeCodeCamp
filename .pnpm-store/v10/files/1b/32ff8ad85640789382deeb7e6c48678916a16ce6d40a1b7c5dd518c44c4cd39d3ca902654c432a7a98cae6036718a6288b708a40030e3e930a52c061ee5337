/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const forEachBail = require("./forEachBail");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

class RootsPlugin {
	/**
	 * @param {string | ResolveStepHook} source source hook
	 * @param {Set<string>} roots roots
	 * @param {string | ResolveStepHook} target target hook
	 */
	constructor(source, roots, target) {
		this.roots = [...roots];
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
			.tapAsync("RootsPlugin", (request, resolveContext, callback) => {
				const req = request.request;
				if (!req) return callback();
				if (!req.startsWith("/")) return callback();

				forEachBail(
					this.roots,
					/**
					 * @param {string} root root
					 * @param {(err?: null | Error, result?: null | ResolveRequest) => void} callback callback
					 * @returns {void}
					 */
					(root, callback) => {
						const path = resolver.join(root, req.slice(1));
						/** @type {ResolveRequest} */
						const obj = {
							...request,
							path,
							relativePath: request.relativePath && path,
						};
						resolver.doResolve(
							target,
							obj,
							`root path ${root}`,
							resolveContext,
							callback,
						);
					},
					callback,
				);
			});
	}
}

module.exports = RootsPlugin;
