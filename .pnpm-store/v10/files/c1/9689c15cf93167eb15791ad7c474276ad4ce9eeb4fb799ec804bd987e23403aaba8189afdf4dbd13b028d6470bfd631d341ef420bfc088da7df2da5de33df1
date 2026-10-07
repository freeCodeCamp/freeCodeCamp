/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const forEachBail = require("./forEachBail");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {{ alias: string | string[], extension: string }} ExtensionAliasOption */

module.exports = class ExtensionAliasPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {ExtensionAliasOption} options options
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, options, target) {
		this.source = source;
		this.options = options;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		const { extension, alias } = this.options;
		resolver
			.getHook(this.source)
			.tapAsync("ExtensionAliasPlugin", (request, resolveContext, callback) => {
				const requestPath = request.request;
				if (!requestPath || !requestPath.endsWith(extension)) return callback();
				const isAliasString = typeof alias === "string";
				/**
				 * @param {string} alias extension alias
				 * @param {(err?: null | Error, result?: null | ResolveRequest) => void} callback callback
				 * @param {number=} index index
				 * @returns {void}
				 */
				const resolve = (alias, callback, index) => {
					const newRequest = `${requestPath.slice(
						0,
						-extension.length,
					)}${alias}`;

					return resolver.doResolve(
						target,
						{
							...request,
							request: newRequest,
							fullySpecified: true,
						},
						`aliased from extension alias with mapping '${extension}' to '${alias}'`,
						resolveContext,
						(err, result) => {
							// Throw error if we are on the last alias (for multiple aliases) and it failed, always throw if we are not an array or we have only one alias
							if (!isAliasString && index) {
								if (index !== this.options.alias.length) {
									if (resolveContext.log) {
										resolveContext.log(
											`Failed to alias from extension alias with mapping '${extension}' to '${alias}' for '${newRequest}': ${err}`,
										);
									}

									return callback(null, result);
								}

								return callback(err, result);
							}
							callback(err, result);
						},
					);
				};
				/**
				 * @param {(null | Error)=} err error
				 * @param {(null | ResolveRequest)=} result result
				 * @returns {void}
				 */
				const stoppingCallback = (err, result) => {
					if (err) return callback(err);
					if (result) return callback(null, result);
					// Don't allow other aliasing or raw request
					return callback(null, null);
				};
				if (isAliasString) {
					resolve(alias, stoppingCallback);
				} else if (alias.length > 1) {
					forEachBail(alias, resolve, stoppingCallback);
				} else {
					resolve(alias[0], stoppingCallback);
				}
			});
	}
};
