/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ResultPlugin {
	/**
	 * @param {ResolveStepHook} source source
	 */
	constructor(source) {
		this.source = source;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		this.source.tapAsync(
			"ResultPlugin",
			(request, resolverContext, callback) => {
				const obj = { ...request };
				if (resolverContext.log) {
					resolverContext.log(`reporting result ${obj.path}`);
				}
				resolver.hooks.result.callAsync(obj, resolverContext, (err) => {
					if (err) return callback(err);
					if (typeof resolverContext.yield === "function") {
						resolverContext.yield(obj);
						callback(null, null);
					} else {
						callback(null, obj);
					}
				});
			},
		);
	}
};
