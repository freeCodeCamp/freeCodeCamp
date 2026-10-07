/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { modulesResolveHandler } = require("./ModulesUtils");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ModulesInHierarchicalDirectoriesPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | string[]} directories directories
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, directories, target) {
		this.source = source;
		this.directories = /** @type {string[]} */ [...directories];
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
				"ModulesInHierarchicalDirectoriesPlugin",
				(request, resolveContext, callback) => {
					modulesResolveHandler(
						resolver,
						this.directories,
						target,
						request,
						resolveContext,
						callback,
					);
				},
			);
	}
};
