/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class TryNextPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string} message message
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, message, target) {
		this.source = source;
		this.message = message;
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
			.tapAsync("TryNextPlugin", (request, resolveContext, callback) => {
				resolver.doResolve(
					target,
					request,
					this.message,
					resolveContext,
					callback,
				);
			});
	}
};
