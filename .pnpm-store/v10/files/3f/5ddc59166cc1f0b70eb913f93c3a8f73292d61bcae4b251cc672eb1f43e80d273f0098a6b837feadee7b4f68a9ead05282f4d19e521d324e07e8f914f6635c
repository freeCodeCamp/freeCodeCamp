/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class ParsePlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {Partial<ResolveRequest>} requestOptions request options
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, requestOptions, target) {
		this.source = source;
		this.requestOptions = requestOptions;
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
			.tapAsync("ParsePlugin", (request, resolveContext, callback) => {
				const parsed = resolver.parse(/** @type {string} */ (request.request));
				/** @type {ResolveRequest} */
				const obj = { ...request, ...parsed, ...this.requestOptions };
				if (request.query && !parsed.query) {
					obj.query = request.query;
				}
				if (request.fragment && !parsed.fragment) {
					obj.fragment = request.fragment;
				}
				if (parsed && resolveContext.log) {
					if (parsed.module) resolveContext.log("Parsed request is a module");
					if (parsed.directory) {
						resolveContext.log("Parsed request is a directory");
					}
				}
				// There is an edge-case where a request with # can be a path or a fragment -> try both
				if (obj.request && !obj.query && obj.fragment) {
					const directory = obj.fragment.endsWith("/");
					/** @type {ResolveRequest} */
					const alternative = {
						...obj,
						directory,
						request:
							obj.request +
							(obj.directory ? "/" : "") +
							(directory ? obj.fragment.slice(0, -1) : obj.fragment),
						fragment: "",
					};
					resolver.doResolve(
						target,
						alternative,
						null,
						resolveContext,
						(err, result) => {
							if (err) return callback(err);
							if (result) return callback(null, result);
							resolver.doResolve(target, obj, null, resolveContext, callback);
						},
					);
					return;
				}
				resolver.doResolve(target, obj, null, resolveContext, callback);
			});
	}
};
