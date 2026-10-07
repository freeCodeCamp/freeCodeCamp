/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

const namespaceStartCharCode = "@".charCodeAt(0);

module.exports = class JoinRequestPartPlugin {
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
				"JoinRequestPartPlugin",
				(request, resolveContext, callback) => {
					const req = request.request || "";
					let i = req.indexOf("/", 3);

					if (i >= 0 && req.charCodeAt(2) === namespaceStartCharCode) {
						i = req.indexOf("/", i + 1);
					}

					/** @type {string} */
					let moduleName;
					/** @type {string} */
					let remainingRequest;
					/** @type {boolean} */
					let fullySpecified;
					if (i < 0) {
						moduleName = req;
						remainingRequest = ".";
						fullySpecified = false;
					} else {
						moduleName = req.slice(0, i);
						remainingRequest = `.${req.slice(i)}`;
						fullySpecified = /** @type {boolean} */ (request.fullySpecified);
					}
					/** @type {ResolveRequest} */
					const obj = {
						...request,
						path: resolver.join(
							/** @type {string} */
							(request.path),
							moduleName,
						),
						relativePath:
							request.relativePath &&
							resolver.join(request.relativePath, moduleName),
						request: remainingRequest,
						fullySpecified,
					};
					resolver.doResolve(target, obj, null, resolveContext, callback);
				},
			);
	}
};
