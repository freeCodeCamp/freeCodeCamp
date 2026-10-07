/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ModulesInRootPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string} path path
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, path, target) {
		this.source = source;
		this.path = path;
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
			.tapAsync("ModulesInRootPlugin", (request, resolveContext, callback) => {
				/** @type {ResolveRequest} */
				const obj = {
					...request,
					path: this.path,
					request: `./${request.request}`,
					module: false,
				};
				resolver.doResolve(
					target,
					obj,
					`looking for modules in ${this.path}`,
					resolveContext,
					callback,
				);
			});
	}
};
